import React from 'react';
import PropTypes from 'prop-types';
import { Background } from '../GlobalStyle';
import styled from 'styled-components';

const BackIcon = styled.a`
    position: fixed;
    top : 20px;
    left : 10px;
    width : 100px;
    height : 100px;
    background-color: red;
`

const Profile = (props) => {
    return (
        <Background>
            
        </Background>
    );
};

Profile.propTypes = {
    
};

export default Profile;