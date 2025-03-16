import axios from "axios";
import { useEffect, useState, useRef } from "react";
import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from "uuid";
import { getMessageRoute, sendMessageRoute } from "../utils/APIroute";
import styled from "styled-components";


export default function ChatContainer(props){
    const scrollRef = useRef();
    const [messages, setMessages] = useState([]);
    const [incoming, setIncoming] = useState(null);

    const getAllMessages = async () => {
        const user = JSON.parse(localStorage.getItem("chat-app-user"));
        const res = await axios.post(getMessageRoute, {
            from: user._id,
            to: props.currentChat._id,
        });
        setMessages(res.data);
    };

    useEffect(() => {
        if (props.currentChat){
            getAllMessages();
        }
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps 
    [props.currentChat]);


    const handleSend = async (msg) => {
        const user = JSON.parse(localStorage.getItem("chat-app-user"));
        await axios.post(sendMessageRoute, {
            from: user._id,
            to: props.currentChat._id,
            message: msg,
        });

        props.socket.current.emit("send-msg", {
            to: props.currentChat._id,
            from: user._id,
            message: msg,
        });

        setMessages((prev) => [...prev, { fromSelf: true, message: msg }]);
    };

    useEffect(() => {
        if (props.socket.current){
            props.socket.current.on("msg-recieve", (msg) => {
                setIncoming({ fromSelf: false, message: msg });
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() =>{
        if (incoming) setMessages((prev) => [...prev, incoming]);
    }, [incoming]);

    useEffect(() =>{
        scrollRef.current?.scrollIntoView({ behavior: "smooth"});
    }, [messages]);


    return (
        <>
        <ChatContainerWrapper>
            <ChatHeader>
                <UserDetails>
                    <Avatar>
                        {props.currentChat.avatarImage ? (
                            <img src={props.currentChat.avatarImage} alt="" />
                        ) : (
                            <toPersonCircle />
                        )}
                    </Avatar>
                    <Username>
                        <h3>{props.currentChat.username}</h3>
                    </Username>
                </UserDetails>
            </ChatHeader>
            <ChatMessages>
                {messages.map((message) => (
                    <div ref={scrollRef} key={uuidv4()}>
                        <Message className={message.fromSelf ? "sender" : "recieved"}>
                            <p>{message.message}</p>
                        </Message>
                    </div>
                ))}
            </ChatMessages>
            <ChatInput sendMessage={handleSend} />
        </ChatContainerWrapper>
        </>
    );
}

const ChatContainerWrapper = styled.div`
    display: grid;
    grid-template-rows: 10% 75% 15%;
    gap: 0.1rem;
    overflow: hidden;
`;

const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 1rem;
    background-color: #075e54;
`;

const UserDetails = styled.div`
    display: flex;
    align-items: center;
`;

const Avatar = styled.div`
    img{
        height: 3rem;
        width: 3rem;
        border-radius: 3rem;
    }
    svg {
        color: #a0a0a0;
        font-size: 3rem;
        cursor: pointer;
    }
`;

const Username = styled.div`
    h3{
        color:white;
    }
`;

const ChatMessages = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    background-color: #ece5dd;
    &::-webkit-scrollbar {
        width: 0.2rem;
        &-thumb {
            background-color: grey;
            border-radius: 1rem;
        }
    }
`;

const Message = styled.div`
    display: inline-block;
    padding: 0.5rem;
    border-radius: 0.5rem;
    max-width: 60%;
    &.sender{
        float: right;
        background-color:"#dcf8c6";
        border-top-left-radius: 0.5rem;
    }
    &.recieved {
        float: left;
        background-color: #fff;
        border-top-right-radius: 0.5rem;
    }
`;