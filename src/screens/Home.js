import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Background } from '../GlobalStyle';
import PageTitle from "../components/PageTitle";
import Menu from '../components/Menu';
import SearchContainer from '../components/Home/search/SearchContainer';
import StockContainer from '../components/Home/stock/StockContainer';
import Header from '../components/Header';

const Home = (props) => {
    const [view, setView] = useState("chart")

    return (
        <Background>
            <Header />
            <PageTitle title="Home" />
            <Menu setView = {setView} user="aaaa"/>
            {view === "search" ? <SearchContainer /> : <StockContainer />}
        </Background>
    );
};

Home.propTypes = {
    
};

export default Home;