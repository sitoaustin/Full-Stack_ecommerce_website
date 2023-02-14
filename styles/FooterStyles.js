import styled from "styled-components";
const { AnimatePresence, motion } = require("framer-motion");

export const FooterStyle = styled.footer`
  min-height: 40vh;
  background: rgb(29, 28, 28);
  background: #f1f1f1;
  border-top: solid black 0.1rem;
  margin: 10rem 0;

  p {
    font-size: 0.875rem;
  }
  .para-div {
    max-width: 35rem;
  }

  .para-div p a {
    color: black;
    text-underline-offset: 0.4rem;
  }

  .footer-nav {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    margin-top: 5rem;
    gap: 2rem;
  }

  .footer-nav h2 {
    margin-bottom: 2rem;
  }

  .down-footer {
    display: grid;
    margin-top: 2rem;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }
  .newsletter {
    display: flex;
    align-items: center;
  }

  .newletter-text {
    margin-right: 1rem;
  }

  .newsletter input {
    border: none;
    border-bottom: solid black 0.1rem;
    width: 70%;
  }

  .newsletter h2 {
    margin-right: 1rem;
  }
  .newsletter input {
    background: #f1f1f1;
  }
  .newsletter input:focus {
    border: none;
    outline: none;
    border-bottom: solid black 0.1rem;
  }

  .submit-footer {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .submit-footer h2 a {
    color: black;
    text-decoration: underline 0.1rem;
    text-underline-offset: 0.5rem;
    font-size: 0.8rem;
  }

  .footer-nav h3 {
    font-weight: 300;
    font-size: 1.4rem;
  }
  @media (max-width: 720px) {
    display: none;
  }
`;
export const FooterStyleSmallScreen = styled(motion.footer)`
  margin: 5rem 0 3rem 0;
  .main-section-footer {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    cursor: pointer;
  }
  .footer-smallscreen {
    /* display: flex; */
    /* align-items: center; */
    /* flex-direction: column; */
    min-height: 3rem;
    /* justify-content: center; */
  }
  .faq-line {
    background: #bbbaba;
    height: 1px;
    margin: 1rem 0rem;
    width: 100%;
  }
  .content-container {
    margin-top: 1rem;
  }
  .newsletter input {
    border: none;
    border-bottom: solid #bbbaba 0.1rem;
    width: 100%;
    margin-right: 0.5rem;
  }
  .submit-footer {
    display: flex;
    margin-bottom: 2rem;
  }

  .newsletter input {
    background: #f1f1f1;
  }
  .newsletter input:focus {
    border: none;
    outline: none;
    border-bottom: solid #bbbaba 0.1rem;
  }
  .newletter-text {
    margin-top: 2rem;
  }
  @media (min-width: 720px) {
    display: none;
  }
`;
