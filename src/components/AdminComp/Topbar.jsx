import React from 'react'
import styled from 'styled-components'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
    margin-bottom: 10px;
`;
const Wrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Topleft = styled.div`

`;
const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`;

const Topright = styled.div`
    display: flex;
    align-items: center;
`;
const Icon = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`;
const IconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    left: 17px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;
const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`;


const Topbar = () => {
  return (
   <Container>
    <Wrapper>
        <Topleft>
            <Logo>Admin</Logo>
        </Topleft>
        <Topright>
            <Icon>
                <NotificationsIcon/>
            <IconBadge>2</IconBadge>
            </Icon>
            <Icon>
                <LanguageIcon/>
            </Icon>
            <Icon>
                <SettingsIcon/>
            </Icon>
            <Avatar src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
        </Topright>
    </Wrapper>
   </Container>
  )
}

export default Topbar
