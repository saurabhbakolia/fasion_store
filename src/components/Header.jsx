import styled from "styled-components";
import {PrimaryButton} from "./PrimaryButton";
import  HeaderImage from '../assets/images/incendiary-fantastically-beautiful-girl-coat-eco-fur-moves-fun-picture-lovely-lady-pink-clothes-removebg-preview 1.svg';



export const Header = () => {
    return (
            <HeaderContainer>
                <HeaderLeft>
                   <HeaderTitle>
                       LET’S
                       EXPLORE
                       UNIQUE
                       CLOTHES.
                   </HeaderTitle>
                    <HeaderSubTitle>
                        Live for Influential and Innovative fashion!
                    </HeaderSubTitle>
                    <PrimaryButton text={"Shop Now"}/>
                </HeaderLeft>
                <HeaderRight>
                    <ImageBox src={HeaderImage} $width={871} $height={550} />
                </HeaderRight>
            </HeaderContainer>
    )
};

const HeaderContainer = styled.div`
    width: 84%;
    height: 30em;
    background-color: #F3F6F5;
    padding-inline: 4.4em; 
    padding-block: 4em;
    margin-block: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 2em;
    margin: 2em auto;
`;

const HeaderLeft = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2em;
`;

const HeaderTitle = styled.text`
    color: #000;
    font-family: Poppins;
    font-size: 4rem;
    font-weight: 900;
    font-style: normal;
    width: 400px;
    line-height: 120%;
`;

const HeaderSubTitle = styled.text`
    width: 100%;
    color: #191818;
    font-size: 1.6rem;
    font-style: normal;
    font-family: Poppins;
    font-weight: 400;
    text-transform: uppercase;
`;

const HeaderRight = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
`;

const ImageBox = styled.img`
    width: ${(props) => (props.$width ? `${props.$width}px` : `auto`)};
    height: ${(props) => (props.$height ? `${props.$height}px` : `auto`)};
`;

const HighlightText = styled.text`
    background-color: #EBD96B;
`;