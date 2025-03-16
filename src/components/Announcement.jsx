import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color:teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;




const Announcement = () => {
  return <Container>Super Deal! Refer a friend and get 3 Tokens</Container>
}

export default Announcement
