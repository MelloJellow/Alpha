import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Announcement from "../components/Announcement";

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option``;


const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement />
        <Title>E-books</Title>  {/* Prop this to sort by books maybe? */}  
        <FilterContainer> 
            <Filter><FilterText>Filter Books:</FilterText>
            <Select>
                <Option disabled selected>Subject</Option>
                <Option>Computer Science</Option>
                <Option>Law</Option>
                <Option>Business</Option>
            </Select>
            
            
            <Select>
            <Option disabled selected>E-Book</Option>
                <Option>Physical</Option>
            </Select>
            </Filter>
            <Filter><FilterText>Sort Books:</FilterText>
            <Select>
            <Option selected>Newest</Option>
                <Option>Oldest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer />
    </Container>
  )
}

export default ProductList
