import React, { Fragment } from "react";
import styles from "./TextBasedRoom.module.css";
import { Button } from "reactstrap";

export default function TextBasedRoom(props) {
  return (
    <Fragment>
      <div className={styles.Paragraph}>
        <span> {props.name} </span>
        <Button disabled={props.type === "D"? true : false}
          onClick={props.type === "L" ? () => props.switchState(props.name, props.state): null}
          outline
          size="sm"
          color={props.state === 1 ? "success" : "danger"}
        >
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            className={
              props.state === 1 ? "bi bi-toggle-on" : "bi bi-toggle-off"
            }
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d={props.state === 1? "M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" :
              "M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"}
            />
          </svg>


        </Button>
      </div>
    </Fragment>
  );
}
