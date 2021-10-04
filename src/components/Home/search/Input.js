import styled from "styled-components";
import React from 'react';
import { useForm } from "react-hook-form";
import { BiSearchAlt } from 'react-icons/bi';

const InputContainer = styled.div`
    position: relative;
    padding: 15px 0 0;
    
    .form__field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid black;
        outline: 0;
        font-size: 1.3rem;
        color: black;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
        text-align: center;
    }
    /* .form__field::placeholder {
        color: transparent;
    } */
    .form__field:placeholder-shown ~ .form__label {
        font-size: 15px;
        cursor: text;
        top: 20px;
    }
    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: black;
    }
    .form__button {
        position: absolute;
        top: 25px;
        left: 80%;
        width: 60px;
        height: 30px;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: black;
        font-weight: 700;
        background: transparent;
        border : none;
        cursor: pointer;
    }
    .form__field:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, black, black);
        border-image-slice: 1;
    }
    .form__field:focus ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: black;
        font-weight: 700;
    }
        /* reset input */
    .form__field:required, .form__field:invalid {
        box-shadow: none;
    }
`

const Input = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        props.setKeyWord(data)
    };
    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <InputContainer>
                <input type="text" className="form__field" placeholder="메모 검색" name="name" required {
                    ...register("keyword", {
                        pattern: {
                            value : /^[ㄱ-ㅎㅏ-ㅣ가-힣A-Za-z0-9]+$/g,
                        },
                    })
                }/>
                {/* <label for="name" class="form__label">종목 검색 또는 메모 검색</label> */}
                <button type="submit" className="form__button"><BiSearchAlt size="30" color="black"/></button>
            </InputContainer>
        </form>
    );
};

export default Input;