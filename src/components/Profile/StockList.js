import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StockBox from '../StockBox';
import { RiAmazonFill } from 'react-icons/ri';
import dummy from '../../dummy';

const Box = styled.div`
    margin-top: 20px;
    width: 95%;
    height: fit-content;
    display: grid;
    grid-template-columns : repeat(3, 1fr);
    gap: 20px 20px;
    grid-gap: 20px 20px;
`

function StockList(props) {

    const [myStockList, setList] = useState(dummy.hasStock)

    return (
        <Box>
            {myStockList.map((d) => {
                return <StockBox type={"profile"} name = {d.stockName} price = {d.price} total = {d.price * d.stockCount}></StockBox>
            })}
            
        </Box>
    );
}

StockList.propTypes = {
    
};


export default StockList;