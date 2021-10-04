import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import dummy from '../../../dummy';

const StockTitle = (props) => {

    const [selectName, setSelect] = useState(props.stock)

    useEffect(() => {
        setSelect(props.stock)
    }, [props.stock])

    return (
        <Box sx={{ 
            width : "300px",
            marginTop : "10px",
            marginLeft : "20px",
            marginBottom : "10px",
        }}>
            <FormControl fullWidth>
                <NativeSelect
                    style = {{
                        fontSize : "30px",
                        fontWeight : 100,
                    }}
                    onChange = {(e) => {
                        setSelect(e.target.value)
                    }}
                    defaultValue = {dummy.hasStock[0].stockName}
                    value={selectName}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                    >
                    {
                        dummy.hasStock.map((d, i) => {
                            return <option key={i} value={d.stockName}>{d.stockName}</option>
                        })
                    }
                </NativeSelect>
            </FormControl>
        </Box>
    )
};

StockTitle.propTypes = {
    
};

export default StockTitle;