import { useState } from "react";
import styled from "styled-components";
import { FaStar } from 'react-icons/fa';
import { showToast } from "../utils/toastNotifications";

const RatingReview = ({ onSubmitReview, reviews = [] }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [review, setReview] = useState("");

    const handleSubmit = () =>{
        if (rating === 0 || review.trim() === ""){
            showToast("Please provide a rating and review!", "warning");
         return;
        }
        const newReview = { rating, review };
        console.log("Submitting review:", newReview)
        onSubmitReview({ rating, review });
        setRating(0);
        setReview("");
    };
    return(
        <Container>
            <Title>Rate & Review</Title>
            <StarContainer>
                {[...Array(5)].map((_, i) =>{
                    const starValue = i + 1;
                    return (
                        <Star
                        key={starValue}
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(null)}
                        $filled={starValue <= (hover || rating)}
                        >
                            <FaStar />
                        </Star>
                    );
                })}
            </StarContainer>
            <ReviewInput
                placeholder="Write your review.."
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />
            <Button onClick={handleSubmit}>Submit</Button>

            <ReviewsList>
                {reviews.map((r, index) =>{
                    <ReviewCard key={index}>
                        <Stars>
                            {[...Array(5)].map((_,i) =>(
                                <FaStar key={i} color={i < r.rating ? "#ffc107" : "#ccc"} />
                            ))}
                        </Stars>
                        <p>{r.review}</p>
                    </ReviewCard>
                })}
            </ReviewsList>
        </Container>
    );
}; //End RatingReview

export default RatingReview;

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    margin: auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 10px;
`;

const StarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

const Star = styled.span`
    font-size: 25px;
    cursor: pointer;
    color: ${({ $filled }) => ($filled ? "#ffc107" : "#ccc")};
    transition: color 0.2s ease-in-out;
`;

const ReviewInput = styled.textarea`
    width: 100%;
    min-height: 80px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 14px;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        background: #0056b3;
    }
`;

const ReviewsList = styled.div`
    margin-top: 20px;
`;

const ReviewCard = styled.div`
    padding: 10px;
    background: #f9f9f9;
    border-radius: 5px;
    margin-top: 10px;
`;

const Stars = styled.div`
    display: flex;
`;