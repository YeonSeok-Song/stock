import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Input from './Input';

const SearchContainer = props => {
    const [keyword, setKeyWord] = useState("");
    useEffect(() => {
        console.log(keyword)
    }, [keyword])
    return (
        <Container>
            <Input setKeyWord = {setKeyWord}></Input>
        </Container>
    );
};

SearchContainer.propTypes = {
    
};

export default SearchContainer;