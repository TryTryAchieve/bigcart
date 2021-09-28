import React from 'react'
import styled from "styled-components"
import {Link} from 'react-router-dom'

const Container=styled.div`
    flex:1;
    margin:5px;
    height:70vh;
    position:relative;
`
const Image=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const Info=styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:column;
`
const Title=styled.h1`
    color:white;
    margin-bottom:20px;
`
const Button=styled.button`
    border:none;
    padding:15px;
    background-color:white;
    opacity:65%;
    cursor:pointer;
`
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button><Link to="/list">SHOP NOW</Link></Button>
            </Info>
        </Container>
    )
}
export default CategoryItem 
