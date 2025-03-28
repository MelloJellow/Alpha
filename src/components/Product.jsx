import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";




const Info = styled.div`
opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;
`;
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fcf5f5;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
    `;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;



const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.3s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;



const Product = ({item}) => {
    const imageUrl = item.imageLinks?.Thumbnail || item.imageUrl || "https://via.placeholder.com/150";

  return (
    <Container>
        <Circle/>
        <Image src={imageUrl0}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
