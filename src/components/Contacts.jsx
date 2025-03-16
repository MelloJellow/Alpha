import React, { useEffect, useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import Logout from "./Logout";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

export default function Contacts({ contacts, currentUser, changeChat, loading }) {
    const [currentUserName, setCurrentUserName] = useState();
    const [currentSelected, setCurrentSelected] = useState();

    useEffect(() => {
        if (currentUser) {
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser]);

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
    };

    return (
        <>
            {currentUserName && (
                <Container>
                    <ContactHeader>
                        <CurrentUser>
                            <Avatar>
                                {currentUser.avatarImage ? (
                                    <img src={currentUser.avatarImage} alt="" />
                                ) : (
                                    <IoPersonCircle />
                                )}
                            </Avatar>
                            <Username>
                                <h2>{currentUserName}</h2>
                            </Username>
                        </CurrentUser>
                        <Logout />
                    </ContactHeader>

                    <ContactsList>
                        {contacts.map((contact, index) => (
                            <ContactItem
                                key={contact._id}
                                className={index === currentSelected ? "selected" : ""}
                                onClick={() => changeCurrentChat(index, contact)}
                            >
                                <Avatar>
                                    {loading ? (
                                        <Skeleton circle height="100%" containerClassName="avatar-skeleton" />
                                    ) : contact.avatarImage ? (
                                        <img src={contact.avatarImage} alt="" />
                                    ) : (
                                        <IoPersonCircle />
                                    )}
                                </Avatar>
                                <Username>
                                    {loading ? <Skeleton width={70} /> : <h3>{contact.username}</h3>}
                                </Username>
                            </ContactItem>
                        ))}
                    </ContactsList>
                </Container>
            )}
        </>
    );
}

// Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: white;
`;

const ContactHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ededed;
    padding: 0.5rem;
`;

const ContactsList = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0.2rem;
        &-thumb {
            background-color: #ffffff39;
            border-radius: 1rem;
        }
    }
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.4rem;
    width: 100%;
    cursor: pointer;
    background-color: #ffffff34;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: #f1f1f1;
    }
    &.selected {
        background-color: lightgrey;
    }
`;

const CurrentUser = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Avatar = styled.div`
    img {
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
    }
    svg {
        color: #a0a0a0;
        font-size: 3rem;
    }
`;

const Username = styled.div`
    h2,
    h3 {
        color: black;
    }
`;


