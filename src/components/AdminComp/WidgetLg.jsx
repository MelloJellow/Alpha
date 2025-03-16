import styled from "styled-components";
import { transactions } from "../../data";

const Container = styled.div`
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`;
const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
`;

const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`;

const Tr = styled.tr`
    
`;
const Th = styled.th`
    text-align: left;
`;
const User = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

const Button = styled.button`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    background-color: ${({ status }) =>
        status === "Approved" ? "#e5faf2" :
        status === "Declined" ? "#fff0f1" :
        status === "Pending" ? "#ebf1fe" : "white"};
    color: ${({ status }) =>
        status === "Approved" ? "#3bb077" :
        status === "Declined" ? "#d95087" :
        status === "Pending" ? "#2a7ade" : "black"};    
`;
const Td = styled.td`
  font-size: 14px;
  color: #444;
  padding: 10px 0;  
`;
const Name = styled.span``;
const Date = styled.td``;
const Amount = styled.td``;
const Status = styled.td``;

const WidgetLg = () => {
  return (
   <Container>
    <Title>Latest Transactions</Title>
    <Table>
        <thead>
            <Tr>
                <Th>Customer</Th>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
            </Tr>
        </thead>
        <tbody>
            {transactions.map((transaction) =>(
                <Tr key={transaction.id}>
                    <Td>
                        <User>
                            <Img src={transaction.img} alt={transaction.customer} />
                            {transaction.customer}
                        </User>
                    </Td>
                    <Td>{transaction.date}</Td>
                    <Td>{transaction.amount}</Td>
                    <Td>
                        <Button status={transaction.status}>{transaction.status}</Button>
                    </Td>
                </Tr>
            ))}
        </tbody>
    </Table>
   </Container>
  )
}

export default WidgetLg
