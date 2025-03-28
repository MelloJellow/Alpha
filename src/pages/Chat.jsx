import { Skeleton } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ChatContainer from "../components/ChatContainer";
import styled from "styled-components";
import axios from "axios";
import APP_HOST from "../configs/envVariables";
import Contacts from "../components/Contacts";
import NoSelectedContact from "../components/NoSelectedContact";
import { allUsersRoute } from "../utils/APIroute";
import {io} from "socket.io-client";

function Chat() {
    console.log(APP_HOST);
    const socket = useRef();

    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [currentUser, setCurrentUser] = useState();
    const [currentChat, setCurentChat] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const getUser = async()=>{
        const user = await JSON.parse(localStorage.getItem('chat-app-user'));
        setCurrentUser(user);
    }
    // specify this to users who have interacted with a book (1 to many)
    const getContacts = async() =>{
        const contacts = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(contacts.data)
        setIsLoading(false);
    }

    const handleChatChange = (chat)=>{
        setCurentChat(chat);
    }

    useEffect(() =>{
        if(!localStorage.getItem('chat-app-user')){
            navigate("/login");
        }
        else {
            getUser();
        }
    },
    // eslint-disable-next-line
    [])

    useEffect(()=>{
        if(currentUser){
            socket.current = io(APP_HOST);
            socket.current.emit("add-user", currentUser._id);
        }
    }, [currentUser]);

    useEffect(()=>{
        if(currentUser){
            setIsLoading(true);
            getContacts();
        }
    },
    // eslint-disable-next-line
    [currentUser])

    return (
        <>
        <Container>
        <div className='container'>
            {
                isLoading ?
                <div style={{height : "100vh"}}>
                    <Skeleton count={5}/>
                    <Skeleton count={5}/>
                    <Skeleton count={5}/>
                </div>
                :
                <Contacts contacts={contacts} currentUser={currentUser} changeChat = {handleChatChange} loading={isLoading} />
            }
            {
                currentChat ? (
                    <ChatContainer currentChat={currentChat} socket={socket}/>
                ) : <NoSelectedContact />
            }
        </div>
            
            </Container>
            </>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background: linear-gradient(
        to bottom,
        #128c7e 0%,
        #128c7e 20%,
        #DCDCDC 20%,
        #DCDCDC 100%
    );
    &:after{
        position : absolute;
        background-color: #075e54;
    }
    .container {
        height: 90vh;
        width: 95vw;
        background-color: #ece5dd;
        display: grid;
        grid-template-columns: 25% 75%;

    }
`;

export default Chat