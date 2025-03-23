import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

function NoSelectedContact() {
    const [user, setUser] = useState("");

    const getUser = useCallback(() => {
        const existing = localStorage.getItem("chat-app-user");
        if (existing){
            const parsedUser = JSON.parse(existing);
            setUser(parsedUser.username);
        }
    }, []);

    useEffect(() => {
        getUser();
    }, [getUser]);

    return (
        <Container>
            <h1>Welcome {user ? user : "!"}</h1>
            <h3>Please select a chat to start messaging!</h3>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #128c7e;
    flex-direction: column;
`;

export default NoSelectedContact;