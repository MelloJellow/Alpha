import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toastNotifications";
import styled from "styled-components";
import { RememberMe } from "@mui/icons-material";
import axios from "axios";
import { loginRoute } from "../utils/APIroute";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!username || !password){
      showToast("Please fill in all fields!","error");
      return;
    }

    //login logic
    try {
      const  response = await axios.post(loginRoute, { username, password });

      console.log(response.status);
      if (response.status) {
        
        showToast("Login Succesful!", "success");


        //Store user session
        if (rememberMe){
          localStorage.setItem("chat-app-user", JSON.stringify(response.user));
        } else {
          sessionStorage.setItem("chat-app-user", JSON.stringify(response.user));
        }

        navigate("/");
      } else {
        showToast(response.message || "Invalid credentials", "error");
        console.log( {response})
      }
    } catch (error){
      showToast("Login failed. Please try again", "error");
      console.error("failed!", error);
    }
    
  };

  return(
    <Container>
      <LoginBox>
        <Title>Login</Title>
        <form onSubmit={handleLogin}>
          <Input type="input"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          <Input type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          <RememberContain>
          <Input type="checkbox"
                checked={RememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                />
              <label>Remember Me</label>
              </RememberContain>
            <ButtonCont>
            <Button type="submit">Login</Button>
            </ButtonCont>
        </form>
        <LinkText>
          <a href="#">Forget Password?</a>
        </LinkText>
        <LinkText>
          Don't have an account? <a href="/register">Register</a>
        </LinkText>
      </LoginBox>
    </Container>
  )
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://png.pngtree.com/png-clipart/20230928/original/pngtree-people-exchange-books-at-event-lend-educational-exchange-vector-png-image_12900516.png")
      center;
  background-size: cover;
  background-position: center;
`;

const LoginBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

const Input = styled.input`
  width: 330px;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 0;
  width: 280px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 12px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s ease-in-out, transform 0.1s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;
const LinkText = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 0.9rem;

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover{
    text-decoration: underline;
  }
`;

const ButtonCont = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const RememberContain = styled.div`
   display: flex;
  align-items: center;
  gap: 5px;
  justify-content: flex-start;
  align-self: flex-start;
  text-align: left;
  width: 100%;
  margin: 10px 0%;
`;