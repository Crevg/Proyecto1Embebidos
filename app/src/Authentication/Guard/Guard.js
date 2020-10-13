import React from 'react'
import { Redirect, Route } from 'react-router-dom';


const Guard = ({ Component, isAuth, ...remaining }) => {
    return (
        <Route {...remaining} render={
            (props) => (

                isAuth ?
                    <Component {...props}></Component>
                    : <Redirect to="/"></Redirect>
            )} >
        </Route >
    )
}

export default Guard;