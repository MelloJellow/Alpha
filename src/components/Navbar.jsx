import { Search } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from "../reponsive"
import { padding } from '@mui/system';


const NavContainer = styled.div`
    height: 60px;
    ${mobile({ height: "50px"})}
`

const Wrapper = styled.div`
  padding: 10px 10px;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px"})}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
 font-size: 14px;
 cursor: pointer;
 `;
const SearchContainer = styled.div`
  border: 0.5 solid lightblue;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 4px;
`

const Input = styled.input`
  border: none;
  border-radius: 10px;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo =styled.h1`
font-weight: bold;
`;

const Right = styled.div`
flex: 1;
text-align: center;
display: flex;
justify-content: flex-end;

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder = "Search by author or title "/>
            <Search style={{color: "green", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>Book Swap</Logo></Center>
        <Right>

          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
            < ShoppingCartIcon/>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      
    </NavContainer>
  )
}

export default Navbar
