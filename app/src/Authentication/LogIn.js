import React, { Component } from "react";
import { Button, FormGroup, Form, Input } from "reactstrap";
import Styles from "./LogIn.module.css";

export default class LogIn extends Component {

    state = {
        user: "",
        password: ""
    }

    updateUsername = (username) => {
        this.setState({...this.state, user: username});
    }

    updatePassword = (password) => {
        this.setState({...this.state, password: password});
    }

  render() {
    console.log(this.state.user, this.state.password)
    return (
      <div className={Styles.Form}>
        <Form>
          <FormGroup>
            <Input
              type="text"
              name="username"
              id="username"
              defaultValue=""
              placeholder="Nombre de usuario"
              onChange={(e) => this.updateUsername(e.target.value)}
            ></Input>
            <Input
              type="password"
              name="password"
              id="password"
              defaultValue=""
              placeholder="Contraseña"
              onChange={(e) => this.updatePassword(e.target.value)}

            ></Input>
          </FormGroup>
          <FormGroup>
            <Button onClick= {() => this.props.authenticate(this.state.user, this.state.password)} color="primary"> Iniciar sesión </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
