import {Header} from "../components/Header";
import {PrimaryButton} from "../components/PrimaryButton";
import styled from "styled-components";
import {BrandStrap} from "../components/BrandStrap";

export const LandingPage = () => {
    return (
        <LandingPageContainer>
            <Header/>
        </LandingPageContainer>
    )
};

const LandingPageContainer = styled.div`
    width: 84%;
    height: 100%;
    display: block;
    margin: auto;
`;

