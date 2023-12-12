import styled from "styled-components";

export const NavLink = (props) => {
    return (
        <>
            <Button>
                {props.text}
            </Button>
        </>
    )
}

const Button = styled.button`
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    color: #FEFEFE;
    font-family: 'Poppins';
    background: #000;
    text-transform: uppercase;
    padding-inline: 1.2em;
    padding-block: 0.5em;
    border-radius: 0.4em;
`;

export  default Button;