import React, {Component, useState, setState} from "react";
import {loginGoogleProvider, loginAuth} from "../firebase";
import {Link} from "react-router-dom";

class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            user: null
        };

        this.loginWithGoogle = this.loginWithGoogle.bind(this);
        this.logout = this.logout.bind(this);
    }


    loginWithGoogle(){
      loginAuth.signInWithPopup(loginGoogleProvider).then((result) => {
        this.setState({user: result.user});
        this.props.history.push("/profile");
      });
    }

    logout(){
      loginAuth.signOut().then(() => {
        this.setState({user: null});
      });
    }

    componentDidMount() {
      loginAuth.onAuthStateChanged((user) => {
        if(user){
          this.setState({user: user});
        } 
      });
    }

    render() {

      let welcomeStyle = {
        color: "yellow",
        fontSize: 46,
        fontFamily: "Avenir-Light"
      };

      return (
          <div>

            <p style = {welcomeStyle}>
              Welcome
            </p>

            {
              this.state.user == null ? 
              <button onClick={this.loginWithGoogle}> login </button>: 
              <button onClick={this.logout}>logout</button>
            }
          </div>
      )
    }
}

export default Login