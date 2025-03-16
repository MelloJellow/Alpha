import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Container = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    background-color: #e2d9e2;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    `;

const Wrapper = styled.div`
  height: 100%;

`;

const Slide = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    align-items: center;
`;


const ImgContainer = styled.div`
height: 100%;
    flex: 1;

`;


const Image = styled.img`
height: 50%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    height: 100%;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
`;















const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ChevronLeftIcon/>
        </Arrow>
        <Wrapper>
            <Slide>
            <ImgContainer>
            <Image src='src\photos\cover1.png'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Swap University Books!</Title>
                <Desc>Message, Exchange and Barter!</Desc>
                <Button>click me!</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ChevronRightIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider