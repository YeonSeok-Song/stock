import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Background } from '../GlobalStyle';
import Container from '../components/Login/Container';
import axios from 'axios';
import server from "../config/server";

const Login = () => {
    const [loginData, setLoginData] = useState(undefined)
    
    useEffect(() => {
        if(loginData) console.log(loginData)
    })

    return (
        <Background>
            <Container setLoginData = {setLoginData}></Container>
        </Background>
    );
};

Login.propTypes = {
    
};

export default Login;