import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import ContainerBox from './Container';
import InputBox from './InputBox';
import Logo from './Logo';
import Button from './Button';
import ErrorText from './ErrorText';

const Container = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        props.setLoginData(data)
    };

    const linkToSignUp = () => {
        window.location.href = "/sign-up";
    }

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <ContainerBox>
                <Logo src="/img/STOMEMO-logo-resize.png"/>

                <InputBox type="text" placeholder="아아디" {...register("user_id", {
                    required : true,
                    pattern : {
                        value : /^[A-Za-z0-9]+$/g,
                        message : "아이디 형식이 올바르지 않습니다."
                    }
                })}></InputBox>

                <InputBox type="password" placeholder="비밀번호" {...register("password", {
                    required : true,
                })}></InputBox>
                <ErrorText>{errors?.user_id?.message}</ErrorText>
                <Button type="submit">로그인</Button>
                <Button type="button" onClick={linkToSignUp}>회원 가입</Button>
            </ContainerBox>
            
        </form>
    );
};

Container.propTypes = {
    
};

export default Container;