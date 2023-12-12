import {Header} from "../components/Header";
import styled from "styled-components";
import {BrandStrap} from "../components/BrandStrap";
import {NewArrivals} from "../components/NewArrivals";
import {SaleBanner} from "../components/SaleBanner";
import {FavouriteContainer} from "../components/FavouriteContainer";
import {NewsLetter} from "../components/NewsLetter";
import {Footer} from "../components/Footer";

export const LandingPage = () => {
    return (
        <LandingPageContainer>
            <Header/>
            <BrandStrap/>
            <NewArrivals/>
            <SaleBanner/>
            <FavouriteContainer/>
            <NewsLetter/>
            <Footer/>
        </LandingPageContainer>
    )
};

const LandingPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
`;

