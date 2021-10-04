import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Graph from './test/Graph';
import Container from '../Container'
import StockTitle from './StockTitle';
import styled from "styled-components";
import Chart from './chart';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StockContainer = (props) => {
    const [time, setTime] = useState("day");

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <FlexContainer>
            <StockTitle stock = {props.stock}/>
            <FormControl sx={{ 
                marginLeft : 2.3, 
                Width: 70,
                marginBottom : 1,
            }}>
                <InputLabel style={{
                    position: "relative",
                    marginTop : "-10px",
                    top : "16px",
                    fontSize : "13px",
                }} id="demo-simple-select-autowidth-label">날짜</InputLabel>
                <Select
                    style={{
                        fontSize : "11px",
                        height : "25px",
                    }}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={time}
                    onChange={handleChange}
                    autoWidth
                    label="날짜"
                >
                    <MenuItem value={"year"}>년</MenuItem>
                    <MenuItem value={"month"}>월</MenuItem>
                    <MenuItem value={"week"}>주</MenuItem>
                    <MenuItem value={"day"}>일</MenuItem>
                </Select>
            </FormControl> 
            <Chart />
        </FlexContainer>
    );
};

StockContainer.propTypes = {
    
};

export default StockContainer;