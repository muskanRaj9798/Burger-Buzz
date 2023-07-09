import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Muskan Raj</h3>

        <p>
          The founder of BURGER-BUZZ.
          <br />
          Our aim is to become the go-to destination for burger lovers who crave the best.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
