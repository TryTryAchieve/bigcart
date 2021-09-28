import { FavoriteBorderSharp, ShoppingCartSharp ,SearchOutlined} from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from"styled-components"

const Info=styled.div`
    opacity:0;
    height:100%;
    width:100%;
    position:absolute;
    display :flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,0.3);
    z-index:3;
`
const Container=styled.div`
    flex:1;
    margin:10px;
    min-width:280px;
    height:350px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    &:hover ${Info}{
        opacity:1;
    }
`
const Image=styled.img`
    height:100%;
    width:100%;
    object-fit:cover;
    z-index:2;
`

const Icon=styled.div`
    margin:10px;
    height:40px;
    width:40px;
    cursor:pointer;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover{
        background-color:gray;
        transform:scale(1.2);
    }

`

const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartSharp/>
                </Icon>
                <Icon>
                    <Link to="/product"><SearchOutlined/></Link> 
                </Icon>
                <Icon>
                    <FavoriteBorderSharp/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product