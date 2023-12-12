import styled from "styled-components";
import {ImageBox} from "./ImageBox";
import  FirstArrival from "../assets/images/newArrivalsImages/Rectangle 20.png";
import  SecondArrival from "../assets/images/newArrivalsImages/Rectangle 21.png";
import  ThirdArrival from "../assets/images/newArrivalsImages/Rectangle 22.png";

export const NewArrivals = () => {
    return (
        <ArrivalContainer>
          <NewArrivalText>New Arrivals</NewArrivalText>
            <NewArrivalsImageContainer>
                <ImageBox titleText={"Hoodies & Sweetshirt"} subTitleText={"Explore Now!"} imgSource={FirstArrival}/>
                <ImageBox titleText={"Coats & Parkas"} subTitleText={"Explore Now!"} imgSource={SecondArrival}/>
                <ImageBox titleText={"Tees & T-Shirt"} subTitleText={"Explore Now!"} imgSource={ThirdArrival}/>
            </NewArrivalsImageContainer>
        </ArrivalContainer>
    )
};

const ArrivalContainer = styled.div`
    width: 84%;
    height: fit-content;
    margin: 2em auto;
`;

const NewArrivalText = styled.text`
    color: #000;
    font-family: Poppins;
    font-size: 3em;
    font-style: normal;
    font-weight: 900;
    text-align: left;
    text-transform: uppercase;
`;

const NewArrivalsImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
`;