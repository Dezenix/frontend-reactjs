import React from "react";
import {FaLinkedin, FaTwitterSquare, FaGithubSquare} from "react-icons/fa"
import styles from "./index.module.css"


const team_members = (props) => {
  return (
    <section>
      {props.members.map((member) => {
        return (
          <div className={styles.card} key={member.id}
          >
            
            <div className={styles.card__details}>
              <div className={styles.image}>
                <img src={props.img} alt="" />
              </div>

              <div className={styles.details}>
                <span className={styles.name}>{member.name}</span>
                <span className={styles.profession}>{member.profession}</span>
              </div>

              <div className={styles.media__icons}>
                <a href={member.github_url} target="_blank" className={styles.one}>
                  <FaGithubSquare size="2rem" />
                </a>
                <a href={member.linkedin_url} target="_blank" className={styles.two}>
                  <FaLinkedin size="2rem" />
                </a>
                <a href={member.twitter_url} target="_blank" className={styles.three}>
                  <FaTwitterSquare size="2rem" />
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  );
};

export default team_members
