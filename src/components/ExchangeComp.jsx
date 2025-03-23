import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";

const ExchangeItem = ({ item }) => {
    return (
        <Product>
            <ProductDetail>
                <Image src={item.image} />
                <Details>
                    <ProductName>Product: {item.title}</ProductName>
                    <ProductId>ID: {item.id}</ProductId>
                    <ProductType>Type: {item.type}</ProductType>
                    <Seller>Seller {item.seller}</Seller>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProdAmountContain>
                    <Add />
                    <ProdAmount>{item.quantity}</ProdAmount>
                    <Remove />
                </ProdAmountContain>
                <ProdPrice>${item.price}</ProdPrice>
            </PriceDetail>
        </Product>
    );
};

export default ExchangeItem;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const ProductDetail = styled.div`
    display: flex;
    flex: 2;
`;

const Image = styled.img`
    width: 100px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductType = styled.span``;
const Seller = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const ProdAmountContain = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const ProdAmount = styled.span`
    margin: 0 10px;
    font-size: 18px;
`;

const ProdPrice = styled.span`
    font-size: 19px;
    font-weight: bold;
`;