import React, {Component, useState,setState} from "react";
import {loginAuth} from "../firebase";

class Profile extends React.Component{

  constructor(){
    super();
    this.state = {
      name: "",
      email: ""
      };

      this.profileInfo = this.profileInfo.bind(this);
    }

  profileInfo(){
    if(loginAuth.currentUser != null){
      this.setState({name: loginAuth.currentUser.displayName});
      this.setState({email: loginAuth.currentUser.email})
    }else{
      this.setState({name: "no one logged in"});
    }
  }
  
  componentDidMount(){
    loginAuth.onAuthStateChanged((user) => {
        if(user){
          this.setState({user: user});
          this.profileInfo();
        } 
      });
  }

  render() {
    return (
      <div>
        Hello {this.state.name}
      </div>
    )
  }
}

export default Profile