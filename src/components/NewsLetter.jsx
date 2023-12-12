import styled from "styled-components";
import {PrimaryButton} from "./PrimaryButton";

export const NewsLetter = () => {
    return (
        <NewsLetterContainer>
            <NewsLetterTitle>
                JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </NewsLetterTitle>
            <NewsLetterSubTitle>
                Type your email down below and be young wild generation
            </NewsLetterSubTitle>
            <NewsLetterForm>
                <Input placeholder={"Add your email here"}/>
                <PrimaryButton text={"SEND"}/>
            </NewsLetterForm>
        </NewsLetterContainer>
    )
};

const NewsLetterContainer = styled.div`
    width: 100%;
    height: 30em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2em;
    margin: auto; 
    background: #E5C643;
`;

const NewsLetterTitle = styled.text`
    width: 70%;
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-size: 3.6em;
    font-weight: 900;
`;

const NewsLetterSubTitle = styled(NewsLetterTitle)`
    font-size: 2em;
    font-weight: 400;
`;

const NewsLetterForm = styled.form`
    background-color: #FFF;
    border-radius: 0.6em;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    padding: 0 1em;
`;

const Input = styled.input`
    color: #767676;
    font-size: 1.6em;
    font-weight: 400;
    font-style: normal;
    font-family: Poppins;
    border: none;
    border-style: none;
    outline: none;
    padding: 0.8em 1.4em;
    border-radius: 0.4em;
    text-align: left;
`;
