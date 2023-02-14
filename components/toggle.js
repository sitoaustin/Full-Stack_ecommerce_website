import { useState } from "react";
const { AnimatePresence, motion } = require("framer-motion");
import { BiPlus, BiMinus } from "react-icons/bi";

export default function ToggleContent({ children, header }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="footer-smallscreen"
      layout
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div className="main-section-footer">
        <motion.h2 className="h3-p" layout>
          {header}
        </motion.h2>
        {!isOpen ? <BiPlus /> : <BiMinus />}
      </motion.div>
      {isOpen ? children : ""}
      <motion.div layout className="faq-line"></motion.div>
    </motion.div>
  );
}
