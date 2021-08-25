import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '../components/SignUp/Container';
import { Background } from '../GlobalStyle';
import axios from 'axios';
import server from "../config/server";
import PageTitle from "../components/PageTitle";

const SignUp = () => {

    //로그인 상태면 리다이랙트

    const [userData, setUserData] = useState()

    useEffect(async () => {
        if(userData) {
            await axios.post(server.ip, userData).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
            // window.sessionStorage.setItem("token", true);
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
            <PageTitle title="Signup" />
            <Container setUserData = {setUserData}></Container>
        </Background>
    );
};

SignUp.propTypes = {
    
};

export default SignUp;