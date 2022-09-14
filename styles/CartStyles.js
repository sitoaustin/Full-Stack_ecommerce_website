import styled from "styled-components";
// Animation
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  /* display: none; */
`;

export const CartStyle = styled(motion.div)`
  width: 40%;
  background-color: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
  @media (max-width: 720px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background-color: white;
  padding: 2rem;
  margin: 2rem 0rem;
  img {
    width: 8rem;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const CardInfo = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    flex-direction: space-between;
  }
`;

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  /* left: 50%; */
  /* transform: translate(-50% 0%); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* width: 100%; */
  h1 {
    font-size: 2rem;
    padding: 2rem;
  }
  svg {
    font-size: 10rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled(motion.div)`
  button {
    background-color: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
  }
`;

export const Cards = styled(motion.div)``;
