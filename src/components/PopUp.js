import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Container = styled.div`
    position : fixed;
    left : 40%;
    top : 20%;
    width : 20%;
    height : 30%;
    min-width: 200px;
    min-height: 500px;
    z-index: 100;
    background-color: white;
    border-style: solid;
    border-color: LightSkyBlue;
    border-width: 0.2rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InputBox = styled.input`
    width: 75%;
    min-width : 150px;
    height: 7%;
    min-height : 30px;
    background-color: white;
    border-width: 0.3px;
    border-color : LightSkyBlue;
    border-style: solid;
    margin : 10px;
    padding-left: 10px;
    &:focus {
        outline: 0.5px;
        outline-color: LightSkyBlue;
        outline-style: solid;
    }
`

const Button = styled.button`
    padding : 10px;
    font-weight: 900;
    background: deepskyblue;
    border : none;
    color : white;
    width: 78%;
    min-width : 150px;
    font-size: 15px;
    height: 9%;
    min-height : 30px;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        outline: 0.7px;
        outline-color: DodgerBlue;
        outline-style: solid;
    }
`

const PopUp = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [div, setDiv] = useState("sell")

    const onSubmit = (data) => {
        if(div){
            data["div"] = div
            console.log(data)
        }
        // props.setStockData(data)
    };

    const handelSelect = (e) => {
        setDiv(e.target.value)
    }

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <Container >
                <FormControl sx={{ 
                    margin : 1,
                }}>
                    <InputLabel style={{
                        position: "relative",
                        marginTop : "-10px",
                        top : "16px",
                        fontSize : "13px",
                    }} id="demo-simple-select-autowidth-label">구분</InputLabel>
                    <Select
                        style={{
                            fontSize : "20px",
                            width: "150px",
                            height : "30px",
                        }}
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value = {div}
                        onChange={handelSelect}
                        label="구분"
                    >
                        <MenuItem value={"sell"}>sell</MenuItem>
                        <MenuItem value={"buy"}>buy</MenuItem>
                    </Select>
                </FormControl>
                <InputBox type="text" placeholder="종목 코드 6자리" {...register("code", {
                    //(?P<property>[A-Z]{1})(?P<code>[0-9]{5})(?P<Classification>[0-9]{1})
                    required : true,
                    pattern : {
                        value : /([A-Z]{1})([0-9]{5})([0-9]{1})/g,
                        message : "다시 확인해주세요."
                    }
                })}></InputBox>
                <InputBox type="text" placeholder="종목 명" {...register("stock_name", {
                    required : true,
                    pattern : {
                        value : /^[ㄱ-ㅎㅏ-ㅣ가-힣A-Za-z0-9]+$/g,
                        message : "다시 확인해주세요."
                    }
                })}></InputBox> 
                <InputBox type="text" placeholder="보유 개수" {...register("count", {
                    required : true,
                    pattern : {
                        value : /^[0-9]+$/g,
                        message : "숫자만 입력해 주세요."
                    }
                })}></InputBox>
                <InputBox type="date" placeholder="날짜" {...register("date", {
                    required : true,
                })}></InputBox>

                <Button type="submit" >추가</Button>
                <Button onClick={() => {
                    props.setUsePopUp(false)
                }}>취소</Button>

            </Container>   
        </form>

        
    );
};

export default PopUp;