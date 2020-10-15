import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import GraphicHouse from './GraphicHouse/GraphicHouse'
import TextBasedHouse from './TextBasedHouse/House/TextBasedHouse'
import axios from 'axios'
import { LIGHT_SIGNALS_STATUS, CAMERA_TAKE_PICTURE, DOOR_SIGNALS_STATUS, LIGHT_UPDATE_SIGNAL, LIGHT_TURN_ALL_OFF, LIGHT_TURN_ALL_ON } from '../Assets/httpURLs'
import Pictures from '../Pictures/Pictures'
import image from "../Assets/example.png"

export default class MainContainer extends Component {

    state = {
        lights: [],
        doors: [],
        photo: null
    }

    /*Init the values when the component mounts */
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
        setInterval(() => this.readDoors(), 5000)
    }

    /* Change a light state */
    switchButton = (name) => {
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

    /*Turns all the lights on */
    turnAllOn = () => {
        axios.put(LIGHT_TURN_ALL_ON)
            .then((response) => {
                if (response.status < 200 || response.status > 299) {
                    return null; //SHOW ERROR MSG
                }
                console.log(response)
                let newLights = response.data.data.map(room => { return { name: room.name, state: room.state } })
                console.log(newLights)
                this.setState({
                    ...this.state,
                    lights: newLights
                })

            }).catch(e => {
                console.log(e)
            })

    }



    /*Turns all the lights on */
    turnAllOff = () => {
        axios.put(LIGHT_TURN_ALL_OFF)
            .then((response) => {
                if (response.status < 200 || response.status > 299) {
                    return null; //SHOW ERROR MSG
                }
                let newLights = response.data.data.map(room => { return { name: room.name, state: room.state } })
                this.setState({
                    ...this.state,
                    lights: newLights
                })

            }).catch(e => {
                console.log(e)
            })

    }




    /*UNFINISHED METHODS*/

    readDoors = () => {
        axios.get(DOOR_SIGNALS_STATUS)
            .then(response => {
                if (response.status < 200 || response.status > 299) {
                    return null; //SHOW ERROR MSG
                }
                let newDoors = response.data.data.map(room => { return { name: room.name, state: room.state } })
                this.setState({
                    ...this.state,
                    doors: newDoors
                })
            }).catch( e => {

            })
    }

    takeAPicture = () => {
        /*Call axios to take a picture */
        axios.get(CAMERA_TAKE_PICTURE)
            .then(response => {
                if (response.status < 200 || response.status > 299) {
                    return null; //SHOW ERROR MSG
                }
                alert("Se ha guardado la foto en /home/images")
                this.setState({
                    ...this.state,
                    photo: response.data.data
                })

            }).catch(e => {

            })
        this.setState({
            ...this.state,
            photo: null
        })
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
                        turnAllOn={this.turnAllOn}
                        turnAllOff={this.turnAllOff}
                    />} />
                <Route path="/house/text" exact render={() =>
                    <TextBasedHouse
                        lights={this.state.lights}
                        doors={this.state.doors}
                        switchButton={this.switchButton}
                        turnAllOn={this.turnAllOn}
                        turnAllOff={this.turnAllOff}
                    />} />
                <Route path="/pictures/take" exact render={() =>
                    <Pictures
                        takeAPicture={this.takeAPicture}
                    />} />
            </div>
        )
    }
}
