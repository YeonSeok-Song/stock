import React from 'react';
import styled from 'styled-components';
import { RiUserFill } from 'react-icons/ri';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    position : fixed;
    top : 0;
    width: 100%;
    height : 40px;
    background-color: white;
    border-bottom: solid;
    border-color: LightSkyBlue;
    border-width: 0.12rem;
    
`
const LogoContainer = styled.div`
    width: 75%;
`
const UserContainer = styled.div`
    display: flex;
    width: 25%;
    flex-direction: row-reverse;
    align-items: center;
`
const Logo = styled.img`
    width: 100px;
    height: 40px;
    object-fit: contain;
    margin-left : 30px;
`

const LogoutButton = styled.button`
    border: none;
    margin-right: 30px;
    background-color: transparent;
    font-size: 18px;
    margin-left : 20px;
    cursor: pointer;
`

const ProfileButton = styled.a`
    color : black;
`

const Header = (props) => {
    const profileLink = `/users/${props.user}`
    return (
        <Container>
            <LogoContainer>
                <a href="/"><Logo src="/img/STOMEMO-logo-resize.png"/></a>
            </LogoContainer>
            <UserContainer>
                <LogoutButton>Log Out</LogoutButton>
                <ProfileButton href={profileLink}>
                    <RiUserFill size="22"/>
                </ProfileButton>
            </UserContainer>
            
        </Container>
    );
};

export default Header;