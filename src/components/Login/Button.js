import styled from "styled-components";

const Button = styled.button`
    padding : 10px;
    font-weight: 900;
    background: deepskyblue;
    border : none;
    color : white;
    width: 312px;
    height: 45px;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        outline: 0.7px;
        outline-color: DodgerBlue;
        outline-style: solid;
    }
`

export default Button