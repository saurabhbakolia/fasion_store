import {NavLink} from "./NavLink";
import {NavText} from "./NavText";
import {FashionLogo} from "./FashionLogo";
import styled from "styled-components";

export const NavBar = () => {
    return (
        <>
            <NavWrapper>
                <FashionLogo/>
                <NavLinkWrapper>
                    <NavText text={"CATALOGUE"}/>
                    <NavText text={"FASHION"}/>
                    <NavText text={"FAVOURITE"}/>
                    <NavText text={"LIFESTYLE"}/>
                    <NavLink text={"Sign UP"}/>
                </NavLinkWrapper>

            </NavWrapper>
      </>
    )
}


const NavWrapper = styled.div`
    width: 84%;
    height: fit-content;
    background: transparent; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: ;
    top: 0;
    left: 0;
    z-index: 10;
    text-align: center;
`;

const NavLinkWrapper = styled.div`
    width: 60%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    gap: 4.6em; 
    background: transparent; 
`;