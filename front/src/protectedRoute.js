import React from "react";
import { Route, Redirect } from "react-router-dom";
import axios from 'axios'


export const ProtectedRoute = ({
  component: Component,
  ...rest
} ) => {
    async function getUser(){
        await axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:9000/api/isLogued",
        })
        .then(res=>{
          localStorage.setItem('flag',res.data)
          if(!res.data){
            alert("Debe iniciar sesión para acceder a la aplicación")
          }
        })
        .catch(err=>{
          console.log(err);
          alert("error, intentelo de nuevo")
        })
    }

  // axios.get("http://localhost:9000/api/isLogued",{withCredentials:true}).then((res)=>{
  //   localStorage.setItem('flag',res.data)
  //   if(!res.data){
  //     setTimeout(function(){ alert("Debes iniciar sesion para acceder a la aplicación"); }, 3000);
  //   }
  // })

  return (
    <Route
      {...rest}
      render={props => {
        getUser()
        if (localStorage.getItem('flag')==='true') {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};