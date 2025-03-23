import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed #ccc;
    padding: 20px;
    width: 100%;
    height: 200px;
    text-align: center;
    cursor: pointer;
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
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

const ImageC = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
`;

const Hidden = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
`;

const UploadContainer = ({ onUpload }) =>{
    const [ image, setImage] = useState(null);

    const handleFileChange = (event) =>{
        const file = event.target.files[0];
        if (file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                if (onUpload) onUpload(file);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <Container>
          {image ? (
            <ImageC src={image} alt="Uploaded Preview"/>
          ) : (
            <>
            <p>Click to upload an image</p>
            <Hidden type="file" accept="image/*" onChange={handleFileChange} />
            </>
          )}
            
            <Button onClick={() => document.querySelector("input[type=file]").click()}>Upload</Button>
        </Container>
    );
};

export default UploadContainer;