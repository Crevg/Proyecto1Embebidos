import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Guard from './Authentication/Guard/Guard'


import Header from "./Header/Header";
import MainContainer from "./HouseManagement/MainContainer";
import LogIn from "./Authentication/LogIn";

function App() {

  const [isAuth, setAuth] = useState(false);

  const logIn = (user, pass) => {
    if (user === "admin" && pass === "admin") {
      setAuth(true);
    } else {
      //check with server for other users
      setAuth(false);
    }
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
          isAuth ? <Redirect to ="/house/graphic"></Redirect> : <LogIn authenticate={logIn} logOut={logOut}></LogIn>}></Route>
          <Guard Component={MainContainer} isAuth={isAuth}></Guard>

        </Switch>

      </BrowserRouter>

    </div>

  );
}

export default App;
