import styled from "styled-components";
import { GiChart } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi';
import { RiUserLine } from 'react-icons/ri';

//menu version 1
const MenuContainer = styled.div`
    position: fixed;
    left: 2px;
    top: 200px;
    width: 80px;
    height: 230px;
    display: flex;
    flex-direction: column;
    background: deepskyblue;
    align-items: center;
    .button {
        width: auto;
        height: 32%;
    }
    .line {
        width: 75px;
        height: 1%;
    }
`
const Line = styled.div`
    background-color: white;
`
const MenuButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Menu = (props) => {
    //session storage에 있는 유저 정보를 가져와 삽입
    const profileLink = `/users/${props.user}`
    return (
        <MenuContainer>
            <MenuButton onClick={() => {
                props.setView("search")
            }} className="button"><BiSearchAlt size="35" color="white"/></MenuButton>

            <Line className="line"/>

            <MenuButton onClick={() => {
                props.setView("chart")
            }} className="button"><GiChart size="40" color="white"/></MenuButton>

            <Line className="line"/>

            <MenuButton className="button"><a href={profileLink}><RiUserLine size="40" color="white"/></a></MenuButton>
        </MenuContainer>
    );
};

export default Menu