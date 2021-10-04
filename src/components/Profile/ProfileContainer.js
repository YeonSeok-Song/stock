import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import UserContainer from './UserContainer';
import StockList from './StockList';

function ProfileContainer(props) {
    return (
        <Container>
            <UserContainer></UserContainer>
            <StockList></StockList>
        </Container>
    );
}

ProfileContainer.propTypes = {
    
};


export default ProfileContainer;