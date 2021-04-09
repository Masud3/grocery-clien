import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import icon from '../../fresh-valley-main/icons/google.png';
import facebook from '../../fresh-valley-main/icons/facebook.png'
import './login.css';
import {  useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
import { initializeLogin, handleGoogleSignIn  } from './LoginManager';


const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    });
    initializeLogin();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleSignIn = () => {
        handleGoogleSignIn()
        .then(res =>{
            handleResponse(res, true)
        })
    }
    const handleResponse = (res, redirect) =>{
        setUser(res)
        setLoggedInUser(res);
        storeAuthToken();
        if(redirect){
            history.replace(from);
        }
    }
    
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken( true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <div className="container">
            <div className="loginArea">
                <h2>Login</h2>
                <input type="email" className="form-control" placeholder="Username or Email" required/>
                <hr/>
                <br/>
                <input type="password" className="form-control" placeholder="Password" required/>
                <hr/>
                <br/>
                <input className="checkBox" type="checkbox" name="" id=""/>
                <p className="textofcheckbox">Remember Me</p>
                <a className="passLink" href="#">Forget Password</a>
                <button onClick={handleSignIn} className="login">Login</button>
                <p style={{marginLeft:'90px'}} className="loginText">Don't have an account?</p>
                <a className="loginText" href="#">Create an account</a>
            </div>
            <button className="loginBtn" onClick={handleSignIn}>
                <img className="icon" src={icon} alt="" />
                Continue With Google</button>
                <button className="fbloginBtn" onClick={handleSignIn}>
                <img className="icon" src={facebook} alt="" />
                Continue With Facebook</button>
        </div>
    );
};

export default Login;