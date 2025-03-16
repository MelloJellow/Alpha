import styled from "styled-components";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    //Prop utilization for dynamic display 
    //dev: reuse in Message component?
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};

`;
const TopTexts = styled.div``;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
    height: 90%;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.div``;
const ProductType = styled.span``;
const Seller = styled.span``;
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProdAmountContain = styled.div`
    display: flex;
    align-items: center;
`;
const ProdAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProdPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    align-items: center;
    `;

const HR = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;


const SummaryTitle = styled.div`
    font-weight: 200;
    font-size: 22px;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"} ;
`;
const SummaryItemText = styled.span``;
const SumItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: teal;
    color: white;
    border-radius: 15px;
    font-weight: 600;
    border-color: '#61b868a9e';
`;


const Cart = () => {
  return (
    <Container>
    <Navbar />
    <Announcement/>
    <Wrapper>
        <Title> Your Bag</Title>
        <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
                <TopText>Shopping Bag (2)</TopText>
                <TopText>Wishlist (2)</TopText>
            </TopTexts>
            <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://whs.dmmserver.com/media/640/97810354/9781035415434.jpg"/>
                        <Details>
                            <ProductName><b>Product:</b> Mini Psychology</ProductName>
                            <ProductId><b>ID:</b> 93131821</ProductId>
                            <ProductType><b>Type: </b> Physical </ProductType>
                            <Seller><b>Seller: </b>CassaRio </Seller>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProdAmountContain>
                            <Add/>
                            <ProdAmount>1</ProdAmount>
                            <Remove/>
                        </ProdAmountContain>
                        <ProdPrice>$6</ProdPrice>
                    </PriceDetail>
                </Product>
                <HR />
                <Product>
                    <ProductDetail>
                        <Image src="https://www.watersidepress.co.uk/wp-content/uploads/9781914603525_w1000.jpg"/>
                        <Details>
                            <ProductName><b>Product:</b> Law Book First Edition</ProductName>
                            <ProductId><b>ID:</b> 81954201</ProductId>
                            <ProductType><b>Type: </b> Physical </ProductType>
                            <Seller><b>Seller: </b>Pangyu </Seller>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProdAmountContain>
                            <Add/>
                            <ProdAmount>1</ProdAmount>
                            <Remove/>
                        </ProdAmountContain>
                        <ProdPrice>$10</ProdPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SumItemPrice>$16</SumItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping</SummaryItemText>
                    <SumItemPrice>$2</SumItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SumItemPrice>$18</SumItemPrice>
                </SummaryItem>
                <Button>CheckOut</Button>
            </Summary>
        </Bottom>
    </Wrapper>
    <Footer/>
    </Container>
  )
}

export default Cart
