import React from 'react';
import InputBox from './InputBox';
import ContainerBox from './ContainerBox';
import Text from './Text';
import Button from './Button';
import { useForm } from "react-hook-form";
import ErrorText from './ErrorText';
import TextContainer from './TextContainer';
import Logo from './Logo';
import { v4 as uuidv4 } from 'uuid';
import { v5 as uuidv5 } from 'uuid';

const Container = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const UID = uuidv5(data.id, uuidv4())
        data["uid"] = UID
        props.setUserData(data)
    };
    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <ContainerBox>
                <Logo src="/img/STOMEMO-logo-resize.png"/>
                <TextContainer>
                    <Text>아이디</Text>
                    <ErrorText>{errors?.id?.message}</ErrorText>
                </TextContainer>
                <InputBox type="text" {...register("id", {
                    required: "아이디를 입력해주세요.",
                    maxLength: {
                        value : 8,
                        message : "5 ~ 8자 사이로 입력해주세요."
                    },
                    minLength : {
                        value : 5,
                        message : "5 ~ 8자 사이로 입력해주세요."
                    },
                    pattern: {
                        value : /^[A-Za-z0-9]+$/g,
                        message : "특수문자는 빼주세요."
                    },
                })}
                ></InputBox>
                
                <TextContainer>
                    <Text>비밀번호</Text>
                    <ErrorText>{errors?.password?.message}</ErrorText>
                </TextContainer>
                <Text>(12~20자리 최소 1개의 문자, 숫자, 특수문자))</Text>
                <InputBox type="password" {
                    ...register("password", {
                        required : "비밀번호를 입력해주세요.",
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

                <TextContainer>
                    <Text>이름</Text>
                    <ErrorText>{errors?.name?.message}</ErrorText>
                </TextContainer>
                
                <InputBox type="text" {
                    ...register("name", {
                        required : "이름을 입력해주세요.",
                        pattern: {
                            value : /^[A-Za-z]+$/g,
                            message : "이름... 확실한거죠?"
                        }
                    })
                }></InputBox>

                <TextContainer>
                    <Text>휴대전화</Text>
                    <ErrorText>{errors?.phone?.message}</ErrorText>
                </TextContainer>
                
                <InputBox type="text" {
                    ...register("phone", {
                        required : "번호좀 알려줄래요??",
                        pattern : {
                            value : /^\d{3}-\d{3,4}-\d{4}$/g,
                            message : "아닌거 알아요!!"
                        }
                    })
                }></InputBox>

                <TextContainer>
                    <Text>본인확인 이메일(선택)</Text>
                    <ErrorText>{errors?.email?.message}</ErrorText>
                </TextContainer>
                
                <InputBox type="text" {
                    ...register("email", {
                        pattern : {
                            value : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/g,
                            message : "이메일 형식이 맞지 않네요."
                        }
                    })
                }></InputBox>

                <Button type="submit">회원 가입</Button>
            </ContainerBox>
        </form>
    );
};

export default Container;