import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Guard from './Authentication/Guard/Guard'
import axios from 'axios'
import { AUTH_LOG_IN } from './Assets/httpURLs'


import Header from "./Header/Header";
import MainContainer from "./HouseManagement/MainContainer";
import LogIn from "./Authentication/LogIn";

function App() {

  const [isAuth, setAuth] = useState(false);

  const logIn = (user, pass) => {
    axios.post(AUTH_LOG_IN, { user: user, pass: pass })
      .then(response => {
        setAuth(response.data.data)
      }
      ).catch(e => {
        setAuth(false)
      }
      )
  }

  const logOut = () => {
    setAuth(false);
  }

  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" exact render={() =>
            isAuth ? <Redirect to="/house/graphic"></Redirect> : <LogIn authenticate={logIn} logOut={logOut}></LogIn>}></Route>
          <Guard Component={MainContainer} isAuth={isAuth}></Guard>

        </Switch>

      </BrowserRouter>

    </div>

  );
}

export default App;
