import styled from "styled-components"
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import { Book } from "../data";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    max-width: 300px;
    height: auto;
   
`;

const Image = styled.img`
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 25px;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    color: #000000;
    font-weight: 700;
    line-height: 1.25;
    white-space: nowrap;
    overflow: hidden; 
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer = styled.div``;
const Filter = styled.div``;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement />
        <Wrapper>
            <ImgContainer>
            <Image src={Book[0].thumbnail} alt={Book.title}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{Book[0].title}</Title>
                <Desc>{Book[0].description}</Desc>
                <Price>{Book[0].price}</Price>
                <FilterContainer>
                    <Filter></Filter>
                </FilterContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
