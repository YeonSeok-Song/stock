import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Background } from '../GlobalStyle';
import PageTitle from "../components/PageTitle";
import Menu from '../components/Menu';
import SearchContainer from '../components/Home/search/SearchContainer';
import StockContainer from '../components/Home/stock/StockContainer';
import Header from '../components/Header';
import PopUp from "../components/PopUp";
import styled from 'styled-components';
import ListContainer from '../components/Home/list/ListContainer';
import Container from '../components/Home/Container';

const HomeBackground = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns : repeat(2, 1fr);
    gap: 20px 20px;
    grid-gap: 20px 20px;
    width: 100%;
`

const Home = () => {
    const [usePopUp, setUsePopUp] = useState(false)
    const [selectStock, setStock] = useState('')

    return (
        <HomeBackground>
            <Header />
            <PageTitle title="Home" />
            <Menu setUsePopUp = {setUsePopUp}/>
            {usePopUp ? <PopUp setUsePopUp = {setUsePopUp}/> : null}
            <Container>
                <ListContainer setStock={setStock}/>
                <GridContainer>
                    <StockContainer stock={selectStock}/>
                    <SearchContainer />
                </GridContainer>
            </Container>
        </HomeBackground>
    );
};

Home.propTypes = {
    
};

export default Home;