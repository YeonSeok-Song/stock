import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Background } from '../GlobalStyle';
import Container from '../components/Login/LoginContainer';
import axios from 'axios';
import server from "../config/server";
import PageTitle from "../components/PageTitle";
import styled from 'styled-components';

const LoginBox = styled.div`
    background-color: white;
    padding: 20px 0px 20px 0px;
    border-color: LightSkyBlue;
    border-style : solid;
    border-width: 2px;
`

const Login = () => {

    const loginHandler = (response) => {
        const storage = window.sessionStorage()
        storage.setItem("session", response.data.session)
        storage.setItem("username", response.data.username)
    }

    //로그인 상태면 리다이랙트

    const [loginData, setLoginData] = useState(undefined)
    
    useEffect(async () => {
        console.log("sdsd")
        if(loginData) {
            await axios({
                method: "post",
                url: `http://${server.ip}/users/login/`,
                data: loginData
            })
            .then(function (response) {
                loginHandler(response)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },[loginData])

    return (
        <Background>
            <LoginBox>
                <PageTitle title="Login" />
                <Container setLoginData = {setLoginData}></Container>
            </LoginBox>
        </Background>
    );
};

Login.propTypes = {
    
};

export default Login;