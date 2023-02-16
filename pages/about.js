const { LayoutGroup, motion } = require("framer-motion");

import { AboutStyles } from "../styles/AboutStyles";
export default function About() {
  return (
    <AboutStyles>
      <main>
        <div className="about-body">
          <div className="first-about-section">
            <img src="./img/about1.png" alt="image" />
            <div className="about-intro">
              <h2>MEET THE FOUNDER</h2>
              <h2>Hi I’m Peach Lee, founder of PEACH COLLECTIONS</h2>
              <p>
                My love for beauty started from a young age as is the case with
                most girls but this developed into a full fledged passion as I
                grew older. After starting my career as a hairdresser I realised
                I wanted to do more. <br />
                This was the beginning of my beauty career and how I came to
                PEACH COLLECTIONS.
              </p>
              <a href="./perfume.html">
                {" "}
                <button>VIEW OUR PRODUCT</button>
              </a>
            </div>
          </div>
          <div className="second-about-section">
            <div className="about-intro about-intro-2">
              <h2>MEET THE FOUNDER</h2>
              <h2>Hi I’m Peach Lee, founder of PEACH COLLECTIONS</h2>
              <p>
                My love for beauty started from a young age as is the case with
                most girls but this developed into a full fledged passion as I
                grew older. After starting my career as a hairdresser I realised
                I wanted to do more. <br />
                This was the beginning of my beauty career and how I came to
                start PEACH COLLECTIONS.
              </p>
              <a href="./perfume.html">
                {" "}
                <button>VIEW OUR PRODUCT</button>
              </a>
            </div>
            <img src="./img/about2.png" alt="image" />
          </div>
        </div>
      </main>
    </AboutStyles>
  );
}
