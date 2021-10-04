import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageTitle from "../components/PageTitle";
import Header from '../components/Header';
import ProfileContainer from '../components/Profile/ProfileContainer';

const Background = styled.div`
    width: 100%;
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Profile = (props) => {

    return (
        <Background>
            <Header />
            <PageTitle title="Profile" />
            <ProfileContainer></ProfileContainer>
        </Background>
    );
};

Profile.propTypes = {
    
};

export default Profile;