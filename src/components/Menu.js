import styled from "styled-components";
import { GiChart } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi';
import { RiUserLine } from 'react-icons/ri';
import { GoPlus } from 'react-icons/go';

//menu version 1
const MenuContainer = styled.div`
    position: fixed;
    left: 20px;
    top: 100px;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: deepskyblue;
    align-items: center;
    border-radius: 50%;
    .button {
        width: auto;
        height: 32%;
    }
    .line {
        width: 75px;
        height: 1%;
    }
`
const MenuButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Menu = (props) => {
    //session storage에 있는 유저 정보를 가져와 삽입
    return (
        <MenuContainer>
            <MenuButton onClick={() => {
                props.setUsePopUp(true)
            }}className="button"><GoPlus size="40" color="white"/></MenuButton>
        </MenuContainer>
    );
};

export default Menu