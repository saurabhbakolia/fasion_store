import styled from "styled-components";
import Button from "./NavLink";

export const PrimaryButton = (props) => {
    return (
        <PrimaryButtonText>
            {props.text}
        </PrimaryButtonText>
    )
}

const PrimaryButtonText = styled(Button)`
    text-transform: capitalize;
`;