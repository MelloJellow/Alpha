import styled from "styled-components"

import { useNavigate, useParams } from "react-router-dom";
import { useBook } from "../utils/BookContext";
import { useEffect, useState } from "react";
import { SearchIsbnRoute } from "../utils/APIroute";


const ProductSingle = () => {
   const { bookData} = useBook();
   const navigate = useNavigate();
   const { isbn } = useParams();
   const [book, setBook] = useState(bookData ? bookData[0] : null);

   console.log("helllo:",book);
   useEffect(() => {
    if (!bookData && isbn){
        fetch(`${SearchIsbnRoute}`)
        .then((res) => res.json())
        .then((data) => setBook(data))
        .catch(() => navigate("/search"));
}
}, [isbn, bookData, navigate]);

if (!book) {
return (
    <Container>
        <p>No book found. Try searching again.</p>
        <Button onClick={() => navigate("/search")}>Go back</Button>
    </Container>
);
}
    
   







  return (
    <Container>
        <Wrapper>
            <ImgContainer>
            <Image src={bookData[0].thumbnail} alt={bookData.title}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{bookData[0].title}</Title>
                <Desc>{bookData[0].description}</Desc>
                <GridBox>
                <ISBN>ISBN: {bookData[0].isbn}</ISBN>
                <Price>{bookData[0].price}</Price>
                <Button>Post Book</Button>
                <Button>Retry Entry</Button>

                </GridBox>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}
const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    max-width: 900px;
    width: 100%;
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
    max-width: 600px;
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
    overflow-wrap: break-word;
`;

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    align-items: center;
    margin-top: 20px;
`;

const ISBN = styled.span`
    grid-column: span 2;
    font-size: 14px;
    font-weight: bold;
    color: #555;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;
const FilterContainer = styled.div``;
const Filter = styled.div``;

export default ProductSingle
