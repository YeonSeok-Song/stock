import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Background } from '../GlobalStyle';
import Container from '../components/Login/Container';
import axios from 'axios';
import server from "../config/server";
import PageTitle from "../components/PageTitle";

const Login = () => {

    //로그인 상태면 리다이랙트

    const [loginData, setLoginData] = useState(undefined)
    
    useEffect(async () => {
        if(loginData) {
            await axios.post(server.ip, loginData).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
        }
    })

    return (
        <Background>
            <PageTitle title="Login" />
            <Container setLoginData = {setLoginData}></Container>
        </Background>
    );
};

Login.propTypes = {
    
};

export default Login;