import React from 'react';
import PropTypes from 'prop-types';
import Graph from './Graph';
import Container from './Container'
import StockTitle from './StockTitle';

const StockContainer = props => {
    return (
        <Container>

            <StockTitle />
            <Graph />
            현재 가격 / 총 이익
        </Container>
    );
};

StockContainer.propTypes = {
    
};

export default StockContainer;