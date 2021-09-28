import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Container=styled.div``
const Wrapper=styled.div`
    padding:50px;
    display:flex;
`
const ImgContainer=styled.div`
    flex:1;
`
const Image=styled.img`
    height:90vh;
    width:100%;
    object-fit:cover;
`
const InfoContainer=styled.div`
    flex:1;
    padding:10px 50px;
`
const Title=styled.h1`

`
const Desc=styled.p`
    margin:30px 10px;
`
const Price=styled.span`
    font-size:30px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  `;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.pexels.com/photos/5702451/pexels-photo-5702451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Slim T-Shirt</Title>
                    <Desc>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae iste aperiam cumque quibusdam fuga. Repudiandae necessitatibus accusantium impedit sint exercitationem?
                    </Desc>
                    <Price>₹ 899</Price>
                    <FilterContainer>
                        <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>

                        </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                            <Button><Link to="/cart"> ADD TO CART</Link></Button>
                        </AmountContainer>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Products/>
            <Footer/>
        </Container>
    )
}

export default Product
