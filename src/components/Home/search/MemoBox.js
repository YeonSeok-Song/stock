import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 20px;
    width : 75%;
    height : 80px;
    background-color: white;
    border-width: 2px;
    border-color : LightSkyBlue;
    border-style: solid;
`

const TitleContainer = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    flex-direction: row;
`

const StockName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100px;
    height : 100%;
    font-size: 20px;
`

const Date = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 70px;
    height : 100%;
    padding-top: 4px;
    font-size: 12px;
`

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height : 75px;
`

const Text = styled.div`
    width: 95%;
    height : 85%;
`

const MemoBox = (props) => {
    console.log(props)
    return (
        <Container>
            <TitleContainer>
                <StockName>{props?.stock}</StockName>
                <Date>{props?.time}</Date>
            </TitleContainer>
            <TextContainer>
                <Text>{props?.text}</Text>
            </TextContainer>
        </Container>
    );
};

MemoBox.propTypes = {

};

export default MemoBox;