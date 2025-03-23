import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { showToast } from "../utils/toastNotifications";
import axios from "axios";
import { getUniRoute, registerRoute } from "../utils/APIroute";




const RegisterPage = () => {
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    university: "",
  });
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchAvatars = () => {
      const maleAvatars = Array.from({ length: 3 }, () =>
        `https://avatar.iran.liara.run/public?gender=male&random=${Math.random()}`
      );
      const femaleAvatars = Array.from({ length: 3 }, () =>
        `https://avatar.iran.liara.run/public?gender=female&random=${Math.random()}`
      );
      const allAvatars = [...maleAvatars, ...femaleAvatars];
      setAvatars(allAvatars);
      setSelectedAvatar(allAvatars[0]);
    };
    fetchAvatars();
  }, []);

  useEffect(() => {
    const fetchUniList = async () => {
      try {
        const response = await axios.get(getUniRoute);
        if (response.data?.data && Array.isArray(response.data.data)) {
          setUniversities(response.data.data);
        } else {
          console.error("Unexpected response format: ", response.data);
        }
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };
    fetchUniList();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      return showToast("Password must be at least 6 characters long!", "error");
    }
    if (formData.password !== formData.confirmPassword) {
      return showToast("Passwords do not match", "error");
    }
    if (!formData.university) {
      return showToast("Please select a university", "error");
    }

    try {
      const { data } = await axios.post(registerRoute, {
        ...formData,
        avatarImage: selectedAvatar,
      });
        console.log({ data });
      if (data.status) {
        showToast("Registration Successful", "success");
      } else {
        showToast(data.msg, "error");
      }
    } catch (error) {
      console.error("Registration error: ", error);
      showToast("Something went wrong. Try again later!", "error");
    }
  };

    return (
    <Container>
      <Card>
        <LeftSection>
          <Avatar src={selectedAvatar} alt="User Avatar" />
          <ChangeText>Click to change</ChangeText>
          <AvatarOptions>
            {avatars.map((avatar, index) => (
              <SmallAvatar key={index} src={avatar} onClick={() => setSelectedAvatar(avatar)} />
            ))}
          </AvatarOptions>
        </LeftSection>



        {/* Right Section - registration Form*/ }
        <RightSection>
          <Title>BookSwap Registration</Title>
          <Form onSubmit={handleSubmit}>
            <Input type="text"
                   placeholder="Full Name" 
                   name="fullName" 
                   value={formData.fullName} 
                   onChange={handleChange} required/>
            <Input type="text"
                   placeholder="username" 
                   name="username" 
                   value={formData.username} 
                   onChange={handleChange} required/>

            <Input type="email" 
                   placeholder="Email" 
                   name="email" value={formData.email} 
                   onChange={handleChange} required/>

            <Input type="password"
                   placeholder="Password" 
                   name="password" 
                   value={formData.password} 
                   onChange={handleChange} required/>

            <Input type="password" 
                   placeholder="Confirm Password"
                   name="confirmPassword" value={formData.confirmPassword}
                   onChange={handleChange}
                   required/>


<Select name="university" value={formData.university} onChange={handleChange} required>
      <option value="">Select a University</option>
      {universities.length > 0 ? (
        universities.map((uni, index) => (
          <option key={index} value={index}>
            {uni}
          </option>
        ))
      ) : (
        <option disabled>Loading...</option>
      )}
    </Select>



            <SubmitButton type="submit">Sign Up</SubmitButton>
          </Form>
        </RightSection>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background:linear-gradient(
            rgba(255,255,255,0.5),
            rgba(255,255,255,0.5) 
            ), 
            url("https://www.shutterstock.com/image-vector/books-exchange-crossing-concept-hands-600nw-2275010403.jpg")center;
    background-size: cover;
`;

const Card = styled.div`
  display: flex;
  height: 390px;
  width: 600px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  border-right: 1px solid #ddd;
  padding-right: 15px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const ChangeText = styled.p`
  margin-top: 8px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
`;

const RightSection = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const Title = styled.h2`
  margin-bottom: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const SubmitButton = styled.button`
margin-top: 4%;
  padding: 12px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #0666516a;
  }
`;

const AvatarOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const SmallAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  border: 2px solid transparent;

  &:hover {
    transform: scale(1.1);
    border-color: #555;
  }
`;

export default RegisterPage;
