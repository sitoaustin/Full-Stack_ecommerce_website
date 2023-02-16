import styled from "styled-components";
const { AnimatePresence, motion } = require("framer-motion");

export const AboutStyles = styled.footer`
  header {
    min-height: 20vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 5rem;
    border-bottom: solid black 0.1rem;
  }

  header li {
    list-style: none;
    margin-right: 2rem;
    font-weight: 600;
  }

  header a {
    color: black;
    text-decoration: none;
  }

  /* About Page */
  .first-about-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0rem 5rem;
    margin-top: 5rem;
    color: white;
  }
  .first-about-section img {
    width: 100%;
    height: auto;
  }

  .about-intro {
    background: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: auto;
  }
  .about-intro h2 {
    margin-bottom: 2rem;
    color: gray;
  }
  .about-intro h1 {
    margin-bottom: 2rem;
  }
  .about-intro p {
    margin-bottom: 2rem;
  }
  .about-intro button {
    width: 20rem;
    height: 5rem;
    background: white;
    border: solid black 0.1rem;
  }

  .about-intro button a {
    text-decoration: none;
    color: black;
  }
  .second-about-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 10rem 5rem;
    color: white;
  }
  .second-about-section img {
    width: 100%;
    height: auto;
  }
`;
