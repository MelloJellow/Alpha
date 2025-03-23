import styled from "styled-components";
import Product from "./Product";
import { CatalogueRoute } from "../utils/APIroute";
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;

const Products = ({ books }) => {
    if (!books || books.length === 0) {
        return <h2>No books available</h2>;
    }

    return (
        <Container>
            {books.map((book) => (
                <Product key={book._id} item={book} />
            ))}
        </Container>
    );
};

export default Products;
