import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { iconColor, lineColor, lineWidth } from '../../GlobalStyle';
import UserInfoChange from './UserInfoChange';


const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
`
const ButtonBox = styled.a`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    color : ${iconColor};
    padding-left: 10px;
    text-decoration: none;
`

const Text = styled.div`
    font-size: 40px;
`

const ProfileBox = styled.div`
    width: 100%;
    height: fit-content;
`

const ChangeButton = styled.button`
    margin-top : 15px;
    margin-left: 25px;
    margin-bottom: 10px;
    background-color: transparent;
    border-style: solid;
    border-color: ${lineColor};
    color : ${lineColor};
    border-radius: 25px;
    cursor: pointer;
`

function UserContainer(props) {
    const [change, setChange] = useState(false);

    return (
        <Box>
            <ButtonBox href = "/">
                <BiArrowBack size = "40px"/>
                <Text>
                    Home
                </Text>
            </ButtonBox>
            <ProfileBox>
                <ChangeButton onClick = {() => {
                    setChange(true)
                }}>내정보 수정</ChangeButton>
                {change ? <UserInfoChange setChange={setChange} /> : null}
            </ProfileBox>
        </Box>
        
    );
}

UserContainer.propTypes = {
    
};


export default UserContainer;