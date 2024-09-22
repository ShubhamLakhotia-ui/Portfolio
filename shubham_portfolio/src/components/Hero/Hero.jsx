import React from "react";
import { getImageUrl } from "../../utlis";
import styles from "./Hero.module.css";
import resume from "../../../assets/hero/shubham_resume3.pdf";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Shubham</h1>
        <p className={styles.description}>
          I am a full-stack developer with a 3 years expertise in developing
          visually appealing, responsive, and user-friendly websites. My
          experience spans a diverse range of web projects, including companies
          portals and e-commerce platforms.
        </p>
        <div className={styles.buttons}>
          <a
            href="mailto:lakhotia.sh@northeastern.edu"
            className={styles.contactMe}
          >
            {" "}
            Contact Me
          </a>
          <a href={resume} download="Resume" className={styles.contactMe}>
            {" "}
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
