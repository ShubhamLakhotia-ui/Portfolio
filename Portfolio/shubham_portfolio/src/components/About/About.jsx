import { getImageUrl } from "../../utlis";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>
        <img
          src={getImageUrl("about/About1.png")}
          alt="About Image"
          className={styles.aboutImage}
          style={{ width: "200px", padding: "10px" }}
        ></img>

        <ul className={styles.aboutItems}>
          <h2 className={styles.aboutItem}>
            Hello, I'm Shubham,a creative and results-driven professional with a
            passion for Software Development. With a background in Information
            Systems. With 3 years of experience at Jio Platforms Limited,
            Reliance Industries, I advanced from Software Engineer to Lead
            Developer, leading the development of the PeopleFirst
            website(employee portal). I have a track record of delivering
            successful projects and earning positive feedback from users and
            stakeholders. I'm excited to bring my expertise to new challenges
          </h2>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Curson Icon"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building responsive
                and optimised sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Curson Icon"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience in developing fast and optimised API's</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
