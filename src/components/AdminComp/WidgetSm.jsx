import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from "../../data";

const Container = styled.div`
    flex:1;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    padding: 20px;
    margin-right: 20px;
`;

const Title = styled.span`
    font-size: 22px;
    font-weight: 600;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`;

const User = styled.div`
    display: flex;
    flex-direction: column;
`;

const Username = styled.span`
    font-weight: 600;
`;
const UserTitle = styled.span`
    font-size: 14px;
    color: gray;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
`;

const Icon = styled.div`
    font-size: 16px !important;
    margin-right: 5px;
`;



const WidgetSm = () => {
  return (
   <Container>
    <Title>New Join Members</Title>
    <List>
        {newMembers.map((user) =>(
            <ListItem key={user.id}>
                <Img src={user.img} alt={user.username} />
                <User>
                    <Username>{user.username}</Username>
                    <UserTitle>{user.title}</UserTitle>
                </User>
                <Button>
                    <Icon>
                        <VisibilityIcon />
                    </Icon>
                    Display
                </Button>
            </ListItem>
        ))}
    </List>
   </Container>
  )
}

export default WidgetSm
