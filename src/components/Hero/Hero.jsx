import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Suvetha</h1>
        <p className={styles.description}>
        <p className={styles.description}>
  Full-stack developer with 2 years of experience building high-performance MERN stack apps. Passionate about turning ideas into seamless solutions.
</p>

        </p>
        <a href="mailto:suvethabalakumar@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
