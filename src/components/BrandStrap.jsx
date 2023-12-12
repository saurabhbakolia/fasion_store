import styled from "styled-components";

export const BrandStrap = () => {
    return (
        <BrandStrapContainer>
        </BrandStrapContainer>
    )
};

const BrandStrapContainer = styled.div`
    width: 100%;
    height: 186px;
    display: flex;
    flex-direction: row;
    justify-content: center;    
    align-items: center;
    gap: normal;
`;

const BrandImage = styled.img`
    aspect-ratio: 2/3;
    object-fit: contain;
`;