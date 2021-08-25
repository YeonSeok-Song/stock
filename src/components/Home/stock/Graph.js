import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Chart from "react-google-charts";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const Graph = (props) => {
    const [time, setTime] = useState("day");

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    useEffect(() => {
        console.log(time)
    }, [time])

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel style={{
                    position: "relative",
                    marginTop : "-10px",
                    top : "16px",
                    fontSize : "16px",
                }} id="demo-simple-select-autowidth-label">날짜</InputLabel>
                <Select
                    style={{
                        height : "40px",
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
            <Chart
                width={'100%'}
                height={350}
                chartType="CandlestickChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['day', 'a', 'b', 'c', 'd'],
                    ['Mon', 20, 28, 38, 45],
                    ['Tue', 31, 38, 55, 66],
                    ['Wed', 50, 55, 77, 80],
                    ['Thu', 77, 77, 66, 50],
                    ['Fri', 68, 66, 22, 15],
                ]}
                options={{
                    legend: 'none',
                    bar: { groupWidth: '50%' }, // Remove space between bars.
                    candlestick: {
                    fallingColor: { strokeWidth: 0, fill: '#0000FF' }, // blue
                    risingColor: { strokeWidth: 0, fill: '#FF0000' }, // red
                    },
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
        
    );
};

Graph.propTypes = {
    
};

export default Graph;