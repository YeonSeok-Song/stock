import styled from 'styled-components';

const InputBox = styled.input`
    width: 300px;
    height: 40px;
    background-color: white;
    border-width: 0.3px;
    border-color : LightSkyBlue;
    border-style: solid;
    margin : 10px;
    padding-left: 10px;
    &:focus {
        outline: 0.5px;
        outline-color: LightSkyBlue;
        outline-style: solid;
    }
`



export default InputBox;