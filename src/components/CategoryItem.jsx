import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    `;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    `;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color:gray;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop now</Button>
        </Info>
        
    </Container>
  )
}

export default CategoryItem
