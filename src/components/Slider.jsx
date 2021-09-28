import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React from 'react'
import {useState} from 'react'
import styled from "styled-components"
import {sliderItems} from "../data"
const Container =styled.div`
    width:100%;
    height:100vh;
    display :flex;
    position:relative;
    overflow:hidden;
    margin-top:50px;
`
const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color:lightblue;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left: ${props=> props.direction==="left" && "10px"};
    right:${props=> props.direction==="right" && "10px"};
    cursor:pointer;
    opacity:65%;
    z-index:2;

`
const Wrapper=styled.div`
    height:100%;
    display:flex;
    transform:translateX(${props=>props.slideIndex* -100}vw)
`
const Slide=styled.div` 
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color:#${props=>props.bg};

`
const ImgContainer=styled.div`
    flex:1;
    height:100%;
`
const Image=styled.img`
    height:80%;
`
const InfoContainer=styled.div`
    flex=1;
    padding:50px;
`
const Title=styled.h1`font-size:50px`
const Description=styled.p`
    margin:40px 0px;
    font-weight:600;
`
const Button=styled.button`
    padding:10px;
    font-size:25px;
    background:transparent;
    cursor:pointer;
`
const Slider = () => {
    const[slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2);
        }else{
            setSlideIndex(slideIndex<2?slideIndex+1:0);
        }
    } ;
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeft/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(

                    <Slide bg={item.bg}>
                <ImgContainer>
                    <Image src={item.img} alt="image"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>Show Now</Button>
                </InfoContainer>
                </Slide>
                    ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRight/>
            </Arrow>
        </Container>
    )
}



export default Slider