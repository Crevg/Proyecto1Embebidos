import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import GraphicHouse from './GraphicHouse/GraphicHouse'
import TextBasedHouse from './TextBasedHouse/House/TextBasedHouse'
import axios from 'axios'
import { LIGHT_SIGNALS_STATUS, DOOR_SIGNALS_STATUS, LIGHT_UPDATE_SIGNAL } from '../Assets/httpURLs'

export default class MainContainer extends Component {

    state = {
        lights: [],
        doors: [],
    }

    componentDidMount = () => {
        axios
            .get(LIGHT_SIGNALS_STATUS)
            .then((response) => {
                if (response.status < 300 && response.status >= 200) {
                    let lights = response.data.data;
                    return lights;
                }
            })
            .then((lights) => {
                axios.get(DOOR_SIGNALS_STATUS).then((response) => {
                    if (response.status < 300 && response.status >= 200) {
                        let doors = response.data.data;
                        this.setState({
                            ...this.state,
                            lights: lights.map((room) => {
                                return { name: room.name, state: room.state };
                            }),
                            doors: doors.map((room) => {
                                return { name: room.name, state: room.state };
                            }),
                        });
                    }
                });
            })
            .catch((e) => console.log(e));
    }

    switchButton = (name) => {
        console.log(this.state)
        if (this.state.lights.length === 0) {
            alert("[1] There is no connection with the server");
            return;
        }
        let currentRoom = this.state.lights.find(room => name === room.name);
        if (!currentRoom) {


            alert("[2] There is no connection with the server");
            return;
        }


        let state = currentRoom.state;
        axios
            .put(LIGHT_UPDATE_SIGNAL, { name: name, state: state })
            .then((response) => {
                if (response.status < 200 || response.status > 299) {
                    return null; //SHOW ERROR MSG
                }
                let newLights = this.state.lights.map((room) => {
                    if (room.name === name) {
                        return { name: room.name, state: room.state === 1 ? 0 : 1 };
                    }
                    return { name: room.name, state: room.state };
                });
                this.setState({
                    ...this.state,
                    lights: newLights,
                });
            })
            .catch((error) => {
                console.log(error);
            });

    };

    /*Check if the light is on for styling*/
    isLightOn = (roomName) => {
        if (this.state.lights.length > 0) {
            const room = this.state.lights.find(lightRoom => {
                return lightRoom.name === roomName
            });
            return room.state === 1;
        }
        return false;
    }

    /*Check if the door is opened for styling*/
    isDoorOpened = (roomName) => {
        if (this.state.doors.length > 0) {

            const room = this.state.doors.find(doorRoom => {
                return doorRoom.name === roomName
            });
            return room.state === 1;
        }
        return false;

    }



    render() {
        return (
            <div className="RouteScreen">
                <Route path="/house/graphic" exact render={() =>
                    <GraphicHouse
                        lights={this.state.lights}
                        doors={this.state.doors}
                        isLightOn={this.isLightOn}
                        isDoorOpened={this.isDoorOpened}
                        switchButton={this.switchButton}
                    />} />
                <Route path="/house/text" exact render={() =>
                    <TextBasedHouse
                        lights={this.state.lights}
                        doors={this.state.doors}
                        switchButton={this.switchButton}
                    />} />
            </div>
        )
    }
}
