import styled from "styled-components";

export const NavText = (props) => {
    return (
        <>
            <Text>
                {props.text}
            </Text>
        </>
    )
};

const Text = styled.p`
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    color: #242323;
    font-family: 'Poppins';
    text-transform: uppercase;
`;
