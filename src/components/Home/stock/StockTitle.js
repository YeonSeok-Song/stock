import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const StockTitle = () => {
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
                    defaultValue={30}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                    >
                    <option value={10}>Apple</option>
                    <option value={20}>Alphabet</option>
                    <option value={30}>Amazon</option>
                </NativeSelect>
            </FormControl>
        </Box>
    )
};

StockTitle.propTypes = {
    
};

export default StockTitle;