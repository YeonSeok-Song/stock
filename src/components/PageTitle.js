import React from 'react';
import { Helmet } from 'react-helmet-async';
import {PropTypes} from 'prop-types';

function PageTitle({title}) {
    return <Helmet><title>{title} | STOMEMO</title></Helmet>;

}

PageTitle.propTypes = {
    title:PropTypes.string.isRequired,
}

export default PageTitle;