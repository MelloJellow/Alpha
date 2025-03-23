import React from 'react'
import ExchangeItem from '../components/ExchangeComp'
import styled from 'styled-components';

const dummyExchangeData = [
    {
        id: "93131821",
        title: "Mini Psychology",
        type: "Physical",
        seller: "CassaRio",
        image: "https://whs.dmmserver.com/media/640/97810354/9781035415434.jpg",
        price: 6,
        quantity: 1,
    },
]
const calculateTotal = () =>{
    return dummyExchangeData.reduce((total, item) => total + item.price * item.quantity, 0);
};

const Exchange = () => {
  return (
    <Container>
    {dummyExchangeData.map((item) => (
        <ExchangeItem key={item.id} item={item} />
    ))}
    <TotalPrice>Total: ${calculateTotal()}</TotalPrice>

    </Container>
  )
}

export default Exchange;

const Container = styled.div`
    padding: 20px;
`;

const TotalPrice = styled.div`
    margin-top:20px;
    font-size: 20px;
    font-weight: bold;
`;
