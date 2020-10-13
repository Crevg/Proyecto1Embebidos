import React, {Fragment } from "react";
import TextBasedRoom from "../TextBasedRoom/TextBasedRoom";
import Styles from "./TextBasedHouse.module.css";



export default function TextBasedHouse(props) {
    let lightLabels = [];
    let doorLabels = [];

  /*Creates the array of signals */
  const createLabels = () => {
    lightLabels = [];
    doorLabels = [];
    props.lights.forEach((room) => {
      lightLabels.push(
        <TextBasedRoom
          key={"l" + room.name}
          type="L"
          state={room.state}
          name={room.name}
          switchState={props.switchButton}
        ></TextBasedRoom>
      );
    });
    props.doors.forEach((room) => {
      doorLabels.push(
        <TextBasedRoom
          key={"d" + room.name}
          type="D"
          state={room.state}
          name={room.name}
        ></TextBasedRoom>
      );
    });
  };


  createLabels();
    return (
      <Fragment>
        <div className={Styles.Card}>
          <h3> Luces </h3>
          {lightLabels.length > 0 ? lightLabels : null}{" "}
        </div>

        <div className={Styles.Card}>
          <h3> Puertas </h3>
          {doorLabels.length > 0 ? doorLabels : null}{" "}
        </div>
      </Fragment>
    );
  }

