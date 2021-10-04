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

function UserInfoChange(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        // props.setStockData(data)
    };

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <Container >
                전부 입력
                <InputBox type="text" placeholder="이름" {
                    ...register("name", {
                        required : true,
                        pattern: {
                            value : /^[ㄱ-ㅎㅏ-ㅣ가-힣A-Za-z]+$/g,
                            message : "이름... 확실한거죠?"
                        }
                    })
                }></InputBox>

                <InputBox type="password" placeholder="비밀번호" {
                    ...register("password", {
                        required : true,
                        minLength : {
                            value : 12,
                            message : "12 ~ 20자 사이로 입력해주세요."
                        },
                        maxLength : {
                            value : 20,
                            message : "12 ~ 20자 사이로 입력해주세요."
                        },
                        pattern : {
                            value : /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{12,20}$/g,
                            message : "조건을 확인해주세요."
                        },
                    })
                }></InputBox>

                <InputBox type="text" placeholder="전화번호" {
                    ...register("phone", {
                        required : true,
                        pattern : {
                            value : /^\d{3}-\d{3,4}-\d{4}$/g,
                        }
                    })
                }></InputBox>
                
                <InputBox type="text" placeholder="이메일" {
                    ...register("email", {
                        required : "true",
                        pattern : {
                            value : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/g,
                            message : "이메일 형식이 맞지 않네요."
                        }
                    })
                }></InputBox>

                <Button type="submit" >수정</Button>
                <Button onClick={() => {
                    props.setChange(false)
                }}>취소</Button>

            </Container>   
        </form>

        
    );
}

export default UserInfoChange;
