import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import styled from 'styled-components';
import { IoMdSend } from "react-icons/io";


export default function ChatInput(props) {
    const [msg, setMsg] = useState("");

    const [showPicker, setShowPicker] = useState(false);

    const sendChat = (e) =>{
        e.preventDefault();
        if(msg.length > 0){
            props.sendMessage(msg)
            setMsg("");
        }
    }

    return (
        <>
        {showPicker && (
            <EmojiContainer>
                <EmojiPicker
                    onEmojiClick={(emojiObject) =>setMsg((prevMsg) => prevMsg + emojiObject.emoji)}
                    />
            </EmojiContainer>
        )}
        <ChatInputContain>
            <FormContain onSubmit={(e) =>sendChat(e)}>
                <EButton onClick={() => setShowPicker(!showPicker)}>
                    <MdOutlineEmojiEmotions />
                </EButton>
                <MessageInput
                    type="text"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Message"
                />
                <SendButton type="submit">
                    <IoMdSend />
                </SendButton>
            </FormContain>
        </ChatInputContain>
        </>
    );
}

const EmojiContainer = styled.div`
    position: absolute;
    margin-top: 7.1rem;
    margin-left: 30px;
    z-index: 1;
`;

const ChatInputContain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ededea;
    padding: 0 2rem;
`;

const FormContain = styled.form`
    width: 100%;
    border-radius: 0.5rem;
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: white;
`;

const EButton = styled.div`
    position: relative;
    margin-top: 0.4rem;
    margin-left: 1rem;
    cursor: pointer;

    svg{
        color: #a8a8a8;
        font-size: 1.5rem;
    }
`;

const MessageInput = styled.input`
    width: 100%;
    height: 60%;
    background-color: white;
    color: grey;
    border: none;
    border-radius: 0.2rem;
    font-size: 1.2rem;

    &::placeholder {
        font-size: 1rem;
    }

    &::selection {
        background-color: #9a86f3;
    }

    &:focus {
        outline: none;
    }
`;

const SendButton = styled.button`
    border-radius: 0.5rem;
    width: 4rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #128c7e;
    border: none;
    cursor: pointer;

    svg{
        font-size: 1.5rem;
        color: white;
    }


`;