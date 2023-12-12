import styled from "styled-components";
import {ImageBox} from "./ImageBox";
import FirstFavourite from "../assets/images/favouriteImage/Rectangle 49.png";
import SecondFavourite from "../assets/images/favouriteImage/Rectangle 50.png";

export const FavouriteContainer = () => {
    return (
        <FavouriteMainContainer>
            <FavouriteTitle>
                Young’s Favourite
            </FavouriteTitle>
          <FavouriteImageBox>
              <ImageBox imgSource={FirstFavourite} titleText={"Trending on instagram"} subTitleText={"Explore Now!"} width={52}  height={38}/>
              <ImageBox imgSource={SecondFavourite} titleText={"Trending on instagram"} subTitleText={"Explore Now!"} width={52} height={38}/>
          </FavouriteImageBox>
        </FavouriteMainContainer>
    )
};

const  FavouriteMainContainer= styled.div`
    width: 84%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 3em auto;
`;

const FavouriteTitle = styled.text`
    color: #000;
    font-family: Poppins;
    font-size: 3em;
    font-style: normal;
    font-weight: 900;
`;

const FavouriteImageBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3em;
    width: 100%;
    height: fit-content;
`;