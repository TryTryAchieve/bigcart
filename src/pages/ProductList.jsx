import React from 'react'
import styled from "styled-components"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Container=styled.div`
`
const Title=styled.h1`
margin:20px;
`

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Summer Collection</Title>
            <Products/>
            <Footer/>
        </Container>
    )
}

export default ProductList
