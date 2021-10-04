import styled from 'styled-components'
import { lineColor, lineWidth } from '../../GlobalStyle';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width : 90%;
    margin-top: 20px;
    height: 100%;
    border-color: ${lineColor};
    border-style: solid;
    border-width: 2px;
    margin-top: 90px;
    align-items: center;
    padding-bottom: 20px;
    
`

export default Container;