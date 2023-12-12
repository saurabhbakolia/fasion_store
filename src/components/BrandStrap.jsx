import styled from "styled-components";
import  Brand1 from "../assets/images/brandsImages/Rectangle 36.png";
import  Brand2 from "../assets/images/brandsImages/Rectangle 38.png";
import  Brand3 from "../assets/images/brandsImages/Rectangle 41.png";
import  Brand4 from "../assets/images/brandsImages/Rectangle 43.png";
import  Brand5 from "../assets/images/brandsImages/Rectangle 44.png";
import  Brand6 from "../assets/images/brandsImages/Rectangle 45.png";

export const BrandStrap = () => {
    return (
        <BrandStrapContainer>
            <BrandImage src={ Brand1} />
            <BrandImage src={ Brand2} />
            <BrandImage src={ Brand3} />
            <BrandImage src={ Brand4} />
            <BrandImage src={ Brand5} />
            <BrandImage src={ Brand6} />
        </BrandStrapContainer>
    )
};

const BrandStrapContainer = styled.div`
    width: 100%;
    height: 186px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;    
    align-items: center;
    background: #EBD96B;
`;

const BrandImage = styled.img`
    aspect-ratio: 2/3;
    object-fit: contain;
    mix-blend-mode: color-burn;
    object-position: center;
`;