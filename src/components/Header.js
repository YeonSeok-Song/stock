import React from 'react';
import styled from 'styled-components';
import { RiUserFill } from 'react-icons/ri';
import { HiOutlineLogout } from 'react-icons/hi';

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
    z-index: 10;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: deepskyblue;
    border-style: solid;
    border-radius: 50%;
    border-width: 0;
    width : 27px;
    height : 27px;
    color : white;
    margin-right: 25px;
`

const ProfileButton = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: deepskyblue;
    border-style: solid;
    border-radius: 50%;
    border-width: 0;
    width : 27px;
    height : 27px;
    color : white;
    margin-right: 15px;
`

const Header = (props) => {
    const profileLink = `/users/${props.user}`
    return (
        <Container>
            <LogoContainer>
                <a href="/"><Logo src="/img/STOMEMO-logo-resize.png"/></a>
            </LogoContainer>
            <UserContainer>
                <LogoutButton>
                    <HiOutlineLogout size="22"/>
                </LogoutButton>
                <ProfileButton href={profileLink}>
                    <RiUserFill size="22"/>
                </ProfileButton>
            </UserContainer>
            
        </Container>
    );
};

export default Header;