import styled from "styled-components";
import FirstIcon from "../assets/icons/Group 10.svg";
import SecondIcon from "../assets/icons/Group 11.svg";
import ThirdIcon from "../assets/icons/Group 12.svg"

export const Footer = () => {
    return (
        <FooterMainContainer>
            <LeftSection>
                <h2>FASHION</h2>
                <p>Compete your style with awesome clothes form us.</p>
                <SocialIcons>
                    <img src={FirstIcon} alt="First Icon"/>
                    <img src={SecondIcon} alt="Second Icon"/>
                    <img src={ThirdIcon} alt="Third Icon"/>
                </SocialIcons>
            </LeftSection>

            <RightSection>
                <Column>
                    <h3>Company</h3>
                    <Links>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Careers</a></li>
                    </Links>
                </Column>

                <Column>
                <h3>Quick Links</h3>
                    <Links>
                        <li><a href="#">Share Location</a></li>
                        <li><a href="#">Orders Tracking</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">FAQs</a></li>
                    </Links>
                </Column>

                <Column>
                <h3>Legal</h3>
                    <Links>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </Links>
                </Column>
            </RightSection>
        </FooterMainContainer>
    );
};

const FooterMainContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    background-color: #000;
    color: #fff;
    padding: 7em 4em;
`;

const LeftSection = styled.div`
  width: 100%;
    h2 {
        color: #FFF;   
        font-family: Poppins;
        font-size: 2.2em;
        font-weight: 900;
    }, 
    p {
        color: #BEBEBE;
        font-family: Poppins;
        font-style: normal;
        font-size: 1.6em;
        font-weight: 400;
        width: 70%;
    }
    
`;

const RightSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Column = styled.div`
  h3 {
    margin-bottom: 10px;
      font-weight: 400;
      font-size: 1.2em;
  }
`;

const Links = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    margin-bottom: 1.6em;
  }
  a {
    text-decoration: none;
    color: #8E8E8E;
  }
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.4em;
    width: 12em;
`;