import { useState } from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { SearchIsbnRoute } from "../utils/APIroute";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 2px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
    width: 400px;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    background-color: #f0f0f0;
`;
const SearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;


    input {
        border: none;
        outline: none;
        flex: 1;
        padding: 8px;
    }

    svg{
        color: #555;
        margin-right: 8px;
    }
`;

const UploadBox = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    border: 2px dashed #aaa;
    border-radius: 5px;
    background: white;
    cursor: pointer;
    padding: 10px;
    text-align: center;
    margin-bottom: 5px;

    &:hover {
        border-color: #555;
    }

    input {
        display: none;
    }

    svg {
        color: #555;
        font-size: 24px;
        margin-bottom: 10px;
    }
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;

const SearchISBN = () => {
    const [image, setImage] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile){
            setFile(selectedFile);
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async () => {
        if (!searchText && !file) {
            alert("Please upload an image first");
            return;
        }
      let response;
      try {
        if (file) {
            const formData = new FormData();
            formData.append("image", file);
            if (searchText) formData.append("isbn", searchText);

            response = await fetch(`${SearchIsbnRoute}`, {
                method: "POST",
                body: formData,
            });
        } else {
            response = await fetch(`${SearchIsbnRoute}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isbn: searchText }),
            });
        }

        if (!response.ok) {
            throw new Error("Book not found");
        }

        const data = await response.json();
        console.log("Response:", data);

        if (data.length > 0) {
            navigate(`/product?isbn=${data[0].isbn}`); // Redirect to ProductSingle with ISBN
        } else {
            alert("Book not found. Please try again hahaha.");
        }
    } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again.");
    }
};

    return(
        <Wrapper>
        <Container>
            <SearchBar>
            <SearchIcon/>
            <input type="text" 
            placeholder="ISBN"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} />
            </SearchBar>
            <UploadBox>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {image ? (
                    <img src={image} alt="Uploaded" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px"}}/>
                ) : (
                    <>
                    <span>Click to upload image</span>
                    </>
                )}
            </UploadBox>
            <Button onClick={handleSubmit}>Submit</Button>
        </Container>
        </Wrapper>
    );
};

export default SearchISBN;