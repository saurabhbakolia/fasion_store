import styled from "styled-components";
import {PrimaryButton} from "./PrimaryButton";
import SaleImage from "../assets/images/image 12 (1).png";

export const SaleBanner = () => {
    return (
        <SaleContainer>
            <SaleLeftContent src={SaleImage}/>
            <SaleRightContent>
                <BannerTitle>
                    PAYDAY
                    SALE NOW
                </BannerTitle>
                <BannerSubTitle>
                    Spend minimal $100 get 30% off
                    voucher code for your next purchase
                </BannerSubTitle>
                <SubTitleBold>
                    1 June - 10 June 2021
                </SubTitleBold>
                <BannerSubTitle>
                    *Terms & Conditions apply
                </BannerSubTitle>
                <PrimaryButton text={"Shop Now"}/>
            </SaleRightContent>
        </SaleContainer>
    )
};

const SaleContainer = styled.div`
    background: linear-gradient(1deg, #E0C340 0.13%, #DFC23E 3.97%, #E1C441 7.2%, #E3C743 10.13%, #E4C542 12.98%, #E6C744 15.99%, #E7C845 19.52%, #E5C643 23.96%, #E6C945 30.43%, #E3C743 36.49%, #E9CA48 42.49%, #EDCE49 49.35%, #F0D44C 55.42%, #F4D84F 61.43%, #F6DA52 65.74%, #F7DB53 72.23%, #F9DD55 77.43%, #F9DF56 83.84%, #FAE157 91.52%, #F9DF56 97.87%);
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
`;

const SaleLeftContent = styled.img`
   width: 50%; 
    height:50em;
    object-fit: contain;
    object-position: center;
    mix-blend-mode: inherit;
`;

const SaleRightContent = styled.div`
    width: 50%;
    padding-inline: 1.4em;
    padding-block: 2.4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1em;
`;

const BannerTitle = styled.text`
    color: #000;
    font-family: Poppins;
    font-size: 9.6em;
    font-style: normal;
    font-weight: 900;
    line-height: 120%;
`;

const BannerSubTitle = styled.text`
    color: #231300;
    font-family: Poppins;
    font-size: 2.6em;
    font-style: normal;
    font-weight: 500;
`;

const SubTitleBold = styled(BannerSubTitle)`
    font-weight: 700;
`;
