import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';

const Container = styled.div`
    width: 200px;
    height: 100vh;
    padding: 20px;
    position: fixed;
    background-color: rgb(251, 251, 255);
    top: 0;
    left: 0;
    z-index: 100;
`;

const Wrapper = styled.div`
    padding: 20px;
    color: #555;
`;

const SideMenu = styled.div`
    margin-bottom: 10px;
`;

const Title = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
    padding-bottom: 5px;
`;

const List = styled.ul`
    list-style: none;
    padding: 5px;
    display: flex;
    align-items: center;
`;

const ListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    transition: background 0.3s ease;

&:hover {
    background-color: #f1f1f1;
}
`;
const Icon = styled.div`
    margin-right: 5px;
    font-size: 20px !important;
`;

const sidebar = () => {
  return (
    <Container>
       <Wrapper>
        <SideMenu>
            <Title>Dashboard</Title>
            <List>
                <ListItem>
                    <Icon><HomeIcon/></Icon>
                    Home
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Icon><TimelineIcon/></Icon>
                    Analytics
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Icon><TrendingUpIcon/></Icon>
                    Exchanges
                </ListItem>
            </List>
        <Title>Quick Menu</Title>
        <List>
            <ListItem>
                <Icon><PersonIcon/></Icon>
                Users
            </ListItem>
        </List>
        </SideMenu>
       </Wrapper>
    </Container>
  )
}

export default sidebar
