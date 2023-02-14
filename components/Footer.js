import ToggleContent from "./toggle";
const { LayoutGroup, motion } = require("framer-motion");

import { FooterStyle, FooterStyleSmallScreen } from "../styles/FooterStyles";
export default function Footer() {
  return (
    <>
      <FooterStyle>
        <div className="footer-nav">
          <div className="about-footer">
            <h2>About</h2>
            <div className="para-div">
              <p>
                Founded in 2010 in Amsterdam, ETQ derived under the mindset of
                eliminating over-accessorized branding and focusing primarily on
                letting the quality of the product speak for itself.
                <a href="./about.html">Read more</a>
              </p>
            </div>
          </div>
          <div className="address-footer">
            <h2>Address</h2>
            <p>Singel 465</p>
            <p>1012 WP Amsterdam</p>
            <p>The Netherlands</p>
          </div>
          <div className="contact-footer">
            <h2>Contact</h2>
            <p>Email us</p>
            <p>+234 816 491 8641</p>
          </div>
          <div className="info-footer">
            <h2>Info</h2>
            <p>Shipping info</p>
            <p>Careers</p>
            <p>Wholesale</p>
          </div>
          <div className="follow-footer">
            <h2>Follow us</h2>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Pinterest</p>
          </div>
        </div>
        <div className="down-footer">
          <div className="newsletter">
            <div className="newletter-text">
              <p>Join our</p>
              <p>Newsletter.</p>
            </div>
            <input type="email" />
          </div>
          <div className="submit-footer">
            <h2>
              <a href="#">Submit</a>
            </h2>
          </div>
          <div className="empty-footer"></div>
          <div className="empty-footer1"></div>
          <div className="terms">
            <p>Terms & conditions</p>
            <p>Privacy statement</p>
          </div>
        </div>
      </FooterStyle>
      <FooterStyleSmallScreen>
        <LayoutGroup>
          <ToggleContent header="About">
            <motion.div className="para-div content-container">
              <motion.p>
                Founded in 2010 in Amsterdam, ETQ derived under the mindset of
                eliminating over-accessorized branding and focusing primarily on
                letting the quality of the product speak for itself.
                <motion.a href="./about.html">Read more</motion.a>
              </motion.p>
            </motion.div>
          </ToggleContent>
          <ToggleContent header="Address">
            <div className="address-footer content-container">
              <p>Singel 465</p>
              <p>1012 WP Amsterdam</p>
              <p>The Netherlands</p>
            </div>
          </ToggleContent>
          <ToggleContent header="Info">
            <div className="info-footer content-container">
              <p>Shipping info</p>
              <p>Careers</p>
              <p>Wholesale</p>
            </div>
          </ToggleContent>
          <ToggleContent header="Follow us">
            <div className="follow-footer content-container">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Pinterest</p>
            </div>
          </ToggleContent>
          <motion.div className="contact-footer">
            <p>Email us</p>
            <p>+234 816 491 8641</p>
          </motion.div>
          <div className="down-footer">
            <div className="newsletter">
              <div className="newletter-text">
                <p>Join our Newsletter.</p>
              </div>
              <motion.div className="submit-footer">
                <input type="email" />
                <h2>
                  <a href="#">Submit</a>
                </h2>
              </motion.div>
            </div>
            <div className="empty-footer"></div>
            <div className="empty-footer1"></div>
            <div className="terms">
              <p>Terms & conditions</p>
              <p>Privacy statement</p>
            </div>
          </div>
        </LayoutGroup>
      </FooterStyleSmallScreen>
    </>
  );
}
