import ToggleContent from "./toggle";
const { LayoutGroup, motion, AnimatePresence } = require("framer-motion");

import { FooterStyle, FooterStyleSmallScreen } from "../styles/FooterStyles";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <FooterStyle>
        <div className="footer-nav">
          <div className="about-footer">
            <h2>About</h2>
            <div className="para-div">
              <p>
                Founded in 2022 in Lagos, GQ. derived under the mindset of
                eliminating over-accessorized branding and focusing primarily on
                letting the quality of the product speak for itself.
                <Link href="./about">Read more</Link>
              </p>
            </div>
          </div>
          <div className="address-footer">
            <h2>Address</h2>
            <p>454 Broad way</p>
            <p>246 LG Lagos</p>
            <p>Nigeria</p>
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
        <LayoutGroup layoutId="underline">
          <ToggleContent header="About">
            <motion.div className="para-div content-container">
              <motion.p>
                Founded in 2022 in Lagos, GQ. derived under the mindset of
                eliminating over-accessorized branding and focusing primarily on
                letting the quality of the product speak for itself.
                <Link href="./about">Read more</Link>
              </motion.p>
            </motion.div>
          </ToggleContent>
          <ToggleContent header="Address">
            <div className="address-footer content-container">
              <p>454 Broad way</p>
              <p>246 LG Lagos</p>
              <p>Nigeria</p>
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
        </LayoutGroup>
        <AnimatePresence>
          <motion.div layout transition={{ duration: 2, type: "tween" }}>
            <motion.div className="contact-footer" layout>
              <p>Email us</p>
              <p>+234 816 491 8641</p>
            </motion.div>
            <motion.div className="down-footer">
              <motion.div className="newsletter">
                <motion.div className="newletter-text">
                  <p>Join our Newsletter.</p>
                </motion.div>
                <motion.div className="submit-footer">
                  <input type="email" />
                  <h2>
                    <a href="#">Submit</a>
                  </h2>
                </motion.div>
              </motion.div>
              <motion.div className="empty-footer"></motion.div>
              <motion.div className="empty-footer1"></motion.div>
              <motion.div className="terms">
                <p>Terms & conditions</p>
                <p>Privacy statement</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </FooterStyleSmallScreen>
    </>
  );
}
