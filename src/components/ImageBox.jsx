import styled from "styled-components";
import {ReactComponent as ArrowIcon} from "../assets/icons/Arrow 1.svg";

export const ImageBox = (props) => {
    return (
        <ImageContainer>
            <ImageDiv src={props.imgSource} $width={props.width} $height={props.height}/>
            <ImageContent>
               <ImageContentLeft>
                   <ImageTitle>{props.titleText}</ImageTitle>
                   <ImageSubTitle>{props.subTitleText}</ImageSubTitle>
               </ImageContentLeft>
                <ArrowIcon/>
            </ImageContent>
        </ImageContainer>
    )
};

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start; 
    align-items: center;
    gap: 1em;
`;

const ImageDiv = styled.img`
    width: ${(props)=> (props.$width ? `${props.$width}em` : '30em')};
    height: ${(props) => (props.$height ? `${props.$height}em` : '48em')};
    //width: 30em;
    //height: 48em;
    object-position: center;
    object-fit: contain;
    border-radius: 1.2em;
`;

const ImageContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ImageContentLeft = styled.div`
    
`;

const ImageTitle = styled.text`
    color: #191919;
    font-family: Poppins;
    font-size: 2em;
    font-style: normal;
    font-weight: 500;
    text-align: left;
`;

const ImageSubTitle = styled.div`
    color: #7F7F7F;
    font-family: Poppins;
    font-size: 1.6em;
    font-style: normal;
    font-weight: 500;
    text-align: left;
`;