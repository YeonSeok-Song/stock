import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '../components/SignUp/Container';
import { Background } from '../GlobalStyle';
import axios from 'axios';
import server from "../config/server";
import PageTitle from "../components/PageTitle";
import styled from 'styled-components';

const SignUpBox = styled.div`
    background-color: white;
    padding: 30px 10px 30px 10px;
    border-color: LightSkyBlue;
    border-style : solid;
    border-width: 2px;
`

const SignUp = () => {

    //로그인 상태면 리다이랙트

    const [userData, setUserData] = useState()

    useEffect(async () => {
        if(userData) {
            await axios({
                method: "post",
                url: `http://${server.ip}/users/`,
                data: userData
            })
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

            // window.sessionStorage.setItem("token", true);
            // const cacheStorage = await caches.open('userInfo')
            // await cacheStorage.add("LoginState")
            // console.log(userData)
            // console.log(server)
            // const cachedResponse = await cacheStorage.match("LoginState")
            // console.log(cachedResponse)
        }
    }, [userData])

    return (
        <Background>
            <SignUpBox>
                <PageTitle title="Signup" />
                <Container setUserData = {setUserData}></Container>
            </SignUpBox>
        </Background>
    );
};

SignUp.propTypes = {
    
};

export default SignUp;