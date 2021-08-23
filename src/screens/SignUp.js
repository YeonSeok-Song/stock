import React from 'react';
import PropTypes from 'prop-types';
import Container from '../components/SignUp/Container';
import styled from 'styled-components';

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    width: 100vw;
    height: 100vh;
`;

const SignUp = (props) => {
    return (
        <Background>
            <Container></Container>
        </Background>
    );
};

SignUp.propTypes = {
    
};

export default SignUp;