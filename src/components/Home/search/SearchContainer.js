import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import Input from './Input';
import dummy from '../../../dummy';
import MemoBox from './MemoBox';
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:100%;
`

const MemoContainer = styled.div`
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    overflow: scroll;
    width : 100%;
    height : 400px;
    /* scrollbar-width: none;
    ::-webkit-scrollbar {
        display : none;
    } */
`

const serveDummy = (index) => {
    if (dummy?.hasStock[0]?.memo?.length < index+5) {
        return dummy?.hasStock[0]?.memo?.slice(index, dummy?.hasStock[0]?.memo?.length)
    }
    else {
        return dummy?.hasStock[0]?.memo?.slice(index, index+5)
    }
}

const SearchContainer = props => {
    let dataIndex = 0
    const [keyword, setKeyWord] = useState("dummy");
    const [responseData, setData] = useState(serveDummy(dataIndex));
    const MEMO_LENGTH = 8

    const scrollEvent = (e) => {
        if(e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight) {
            console.log("scroll end")
            console.log(responseData)
            //axios(index)
            if(dataIndex+responseData.length < MEMO_LENGTH) {
                dataIndex += responseData.length
                console.log(dataIndex)
                setData(responseData.concat(serveDummy(dataIndex)))                
            }
        }
    }
    useEffect(() => {
        //서버 통신 코드 작성.
        //받은 데이터를 responseData에 넣음.
        // if(keyword !== "") {
        //     //setData(axios)....
        //     setData([...responseData, ]) //데이터 받는 부분. (교체)
        // }
        
    }, [keyword])
    
    return (
        <FlexContainer>
            <Input setKeyWord = {setKeyWord}></Input>
            <MemoContainer onScroll = {scrollEvent}>
                {responseData?.map(d => {
                    return(
                        <MemoBox time = {d["time"]} text = {d["text"]} stock = {d["stock"]}/>
                    )
                })}
            </MemoContainer>
        </FlexContainer>
    );
};

SearchContainer.propTypes = {
    
};

export default SearchContainer;