import React from 'react'
import { Button } from 'reactstrap'
import Style from './Pictures.module.css'

export default function Pictures(props) {
    return (
        <div className={Style.Container}>
            <div>
                <Button color="primary" onClick={() => props.takeAPicture()}> Tomar una foto</Button> {' '}
            </div>


            {props.photo ? <img src={props.photo} /> : null}

        </div>
    )
}
