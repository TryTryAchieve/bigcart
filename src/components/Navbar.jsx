import { Badge } from "@material-ui/core";
import {Search, ShoppingCartSharp} from "@material-ui/icons";
import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
    height:60px;
    margin-bottom:40px;
`
const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Left=styled.div`
    display:flex;
    flex:1;
    align-items:center;
`
const SearchContainer=styled.div`
    border:0.5px solid gray;
    display flex;
    align-items:center;
    margin-left:25px;
    padding :5px;
`
const Input=styled.input`
    border:none;
`
const Center=styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Logo=styled.h1`
    font-size:70px;
`
const Com=styled.h3`
`

const Right=styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    flex:1;
`
const MenuItem=styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                    <Input/> 
                    <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>BigCart</Logo><Com>.com</Com></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartSharp />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
