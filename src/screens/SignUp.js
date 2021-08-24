import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '../components/SignUp/Container';
import { Background } from '../GlobalStyle';
import axios from 'axios';
import server from "../config/server";

const SignUp = () => {

    const [userData, setUserData] = useState()

    useEffect(async () => {
        if(userData) {
            // axios.post("34.64.207.127:8080", userData).then((response) => {
            //     console.log(response)
            // }).catch((error) => {
            //     console.log(error)
            // })
            window.sessionStorage.setItem("token", true);
            // const cacheStorage = await caches.open('userInfo')
            // await cacheStorage.add("LoginState")
            // console.log(userData)
            // console.log(server)
            // const cachedResponse = await cacheStorage.match("LoginState")
            // console.log(cachedResponse)
        }
    })

    return (
        <Background>
            <Container setUserData = {setUserData}></Container>
        </Background>
    );
};

SignUp.propTypes = {
    
};

export default SignUp;