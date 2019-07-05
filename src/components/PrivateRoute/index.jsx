import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import * as firebase from "firebase";
import Loading from "../Loading";

function PrivateRoute({ component: Component, render, ...rest }) {
    const [user, setUser] = useState()
    useEffect(() => {
      firebase.auth().onAuthStateChanged((result) => {
        console.log(result, "result")
        setUser(result)
      });
    }, [setUser])
  
    if (user === undefined) {
      return <Loading />
    }
  
    const renderComponent = (props) => {
      if(user) {
        if(Component) {
          return <Component {...props} />
        }
        return render(props)
      }
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )      
    }
    return (
      <Route
        {...rest}
        render={renderComponent}
      />
    );
  }
  
  export default PrivateRoute