import styled from "styled-components"
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex:1;
   
`;

const Image = styled.img`
    width: 100%;
    height: 50vh;
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
            <Image src="https://m.media-amazon.com/images/I/41DCnRxR07L._AC_UF894,1000_QL80_.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Law Book</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Exercitationem, obcaecati itaque placeat non accusantium vitae quo? Fugit, nihil tempora,
                    aperiam error blanditiis quidem omnis ipsam corporis ratione ullam, explicabo impedit.
                </Desc>
                <Price>$ 10</Price>
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
