import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <NavContainer>
      <Brand>
      <img src='https://media.discordapp.net/attachments/1236843605696708748/1353012437187563530/image.png?ex=67e01a86&is=67dec906&hm=abdae236bd453c96c3ece90da13aa7bedf74d98ea9cc438b3881c0b0e19691f7&=&format=webp&quality=lossless'
        alt='Book logo' />
        <span>Book Swap</span>
      </Brand>
      <Menu>
        <a href='/'>Home</a>
        <a href='#'>Publish Book</a>
        <a href='#'>Messages</a>
        <a href='#'>Reviews</a>
      </Menu>
      <UserMenu>
        <img
          src='https://avatar.iran.liara.run/public/boy?username=Angelo'
          alt='User Photo'
          onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          <Dropdown isOpen={dropdownOpen}>
            <a href='#'>Dashboard</a>
            <a href='#'>Settings</a>
            <a href='#'>Earnings</a>
            <a href='#'>Sign out</a>
          </Dropdown>
      </UserMenu>
    </NavContainer>
  )
}

export default Navbar;

const NavContainer = styled.nav`
    background-color: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    img {
      height: 2rem;
    }

    span {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
    }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #111827;
    border-radius: 4px;
    transition: 0.2s;

    &:hover {
      background-color: #f3f4f6;
    }
  }
`;


const UserMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2.8rem;
    height: 2.7rem;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 0.5rem;
  min-width: 150px;
  z-index: 1000;

  a {
    display: block;
    padding: 0.5rem;
    color: #111827;
    text-decoration: none;
    border-radius: 4px;
    transition: 0.2s;

    &:hover {
      background-color: #f3f4f6;
    }
  }
`;
