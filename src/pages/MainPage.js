import {Outlet} from "react-router-dom";
import {NavBar} from "../components/NavBar";
import styled from "styled-components";

export const MainPage= () => {
    return (
        <MainContainer>
            <NavBar/>
            <Outlet/>
        </MainContainer>
    )
};

const  MainContainer= styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
`;