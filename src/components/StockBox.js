import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lineColor } from '../GlobalStyle';

const Box = styled.div`
    width: 100%;
    height: 100px;
    border: solid 2px ${lineColor};
    border-radius: 20px;
    ${props => props.page === "Home" ? `cursor : pointer` : ''};
`

const StockName = styled.div`
    width: 100%;
    height: 10%;
    margin-top: 2px;
    margin-left: 9px;
`

const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`

const Down = styled.div`
    font-size: 25px;
    color : blue;
`

const Up = styled.div`
    color : red;
`
function StockBox(props) {
    const [YesterdayPrice, setYPrice] = useState(90);

    const clickHandler = () => {
        props.setStock(props.name)
    }

    return (
        <Box page={props.page} onClick={clickHandler}>
            <StockName>{props.name}</StockName>
            <PriceContainer>
                {YesterdayPrice > props.price ? <Down>{props.price}&nbsp;/ {props.total}</Down> : <Up>{props.price}&nbsp;/ {props.total}</Up> } 
            </PriceContainer>
        </Box>
    );
}

StockBox.propTypes = {
    
};

export default StockBox;