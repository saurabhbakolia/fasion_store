import styled from "styled-components";
import { ReactComponent as  LogoIcon} from '../assets/icons/Vector.svg';

export const FashionLogo = () => {
    return (
        <Wrapper>
            <LogoIcon/>
            <LogoText>Fashion</LogoText>
        </Wrapper>
    )
}

const LogoText = styled.text`
    color: #000;
    font-family: Poppins;
    font-size: 2.4em;
    font-style: normal;
    font-weight: 900;
    text-transform: uppercase;
    margin-inline-start: 13px;
`;

const  Wrapper = styled.div`
    gap:13px ;
`;
