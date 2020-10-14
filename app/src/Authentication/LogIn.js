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

    login = (e) => {
      e.preventDefault()
      this.props.authenticate(this.state.user, this.state.password)

    }

  render() {
    return (
      <div className={Styles.Form}>
        <Form onSubmit={(e) => {this.login(e)}}>
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
            <Button type="submit" color="primary"> Iniciar sesión </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
