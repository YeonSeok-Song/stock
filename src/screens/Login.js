import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Background } from '../GlobalStyle';
import Container from '../components/Login/Container';
import axios from 'axios';
import server from "../config/server";
import PageTitle from "../components/PageTitle";
import styled from 'styled-components';

const LoginBox = styled.div`
    background-color: white;
    padding: 30px 10px 30px 10px;
    border-color: LightSkyBlue;
    border-style : solid;
    border-width: 2px;
`

const Login = () => {

    //로그인 상태면 리다이랙트

    const [loginData, setLoginData] = useState(undefined)
    
    useEffect(async () => {
        if(loginData) {
            await axios({
                method: "post",
                url: `http://${server.ip}/login/`,
                data: loginData
            })
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    })

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