import { ContactMail, Facebook, Instagram, Phone, Room, YouTube } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    display:flex;
`
const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
    justify-content:center;
    align-items:center;
`
const Logo=styled.h1``
const Desc=styled.p`
    margin:20px;
    text-align:center;
`
const SocialContainer=styled.div`
    display:flex;
`
const Icon=styled.div`
    cursor:pointer;
`

const Center=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
    justify-content:center;
    align-items:center;

`
const Title=styled.h3`
    padding-bottom:20px;
`
const List=styled.ul`
`
const ListItem=styled.li`
`
const Right=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
    justify-content:center;
    align-items:center;
`
const Contact=styled.div`
`
const ContactItem=styled.div`
    margin:5px;
`


const Footer = () => {
    return (
        <Container>

            <Center>
                <Title>Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Orders</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Terms</ListItem>

                </List>
            </Center>
            <Left>
                <Logo>BigCart</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit aliquid totam laboriosam tenetur sit animi autem adipisci perferendis mollitia?
                </Desc>
                <SocialContainer>
                    <Icon>
                        <Facebook/>
                    </Icon>
                    <Icon>
                        <Instagram/>
                    </Icon>
                    <Icon>
                        <YouTube/>
                    </Icon>
                </SocialContainer>
            </Left>
            <Right>
                <Title>Contant Us</Title>
                <Contact>
                <ContactItem>
                    <Room/> A-51,High Street, Bangalore
                </ContactItem>
                <ContactItem>
                    <Phone/> 011-36251492
                </ContactItem>
                <ContactItem>
                    <ContactMail/> bigcart.help@bigcart.com
                </ContactItem>
                </Contact>
            </Right>
        </Container>
    )
}

export default Footer
