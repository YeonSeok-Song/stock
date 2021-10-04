import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import StockBox from '../../StockBox';
import dummy from '../../../dummy';
import styled from 'styled-components';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const FlexContainer = styled.div`
    display : flex;
    flex-direction: column;
    width: 95%;
`
const Box = styled.div`
    margin-top: 20px;
    height: fit-content;
    display: grid;
    grid-template-columns : repeat(3, 1fr);
    gap: 20px 20px;
    grid-gap: 20px 20px; 
`
const ButtonContainer = styled.div`
    display : flex;
    height: 40px;
    flex-direction : row;
    align-items: center;
    justify-content: center;
    margin-top: 7px;
`
const Button = styled.button`
    background: none;
    border : none;
    cursor: pointer;
`

const Pages = styled.div`
    font-size : 15px;
`

const ListContainer = (props) => {

    //props.stockList
    const [stockData, setData] = useState(dummy.hasStock);
    const [currentIndex, setIndex] = useState(0);
    const [selectStock, setStock] = useState(stockData[0].stockName);

    const prevHandler = () => {
        if(currentIndex >= 3) {
            setIndex(currentIndex - 3)
        }
    }

    const nextHandler = () => {
        if(currentIndex + 3 <= stockData.length) {
            setIndex(currentIndex + 3)
        }
    }

    useEffect(()=> {
        props.setStock(selectStock)
    }, [selectStock])

    return (
        <FlexContainer>
            <Box>
                {
                    stockData.slice(currentIndex, currentIndex+3).map((d, i) => {
                        return (
                            <StockBox setStock={setStock} page={"Home"} name={d.stockName} price={d.price} total = {d.stockCount * d.price} />
                        )
                    })
                }
            </Box>
            <ButtonContainer>
                <Button onClick={prevHandler}><IoIosArrowBack size="25" color="black"/></Button>
                <Pages>{(currentIndex / 3)+1} / {Math.ceil(stockData.length / 3)}</Pages>
                <Button onClick={nextHandler}><IoIosArrowForward size="25" color="black"/></Button>
            </ButtonContainer>
        </FlexContainer>
        
    );
};

ListContainer.propTypes = {
    
};

export default ListContainer;