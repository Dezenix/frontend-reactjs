import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import styles from "./index.module.css";
const ContactUs = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles["section-header"]}>Contact Us</h1>

      <div className={styles["contact-wrapper"]}>
        <form
          id={styles["contact-form"]}
          className={styles["form-horizontal"]}
          role="form"
        >
          <input
            type="text"
            id="name"
            placeholder="NAME"
            name="name"
            required
          />

          <input
            type="email"
            id="email"
            placeholder="EMAIL"
            name="email"
            required
          />

          <textarea
            rows="10"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button
            className={styles["send-button"]}
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className={styles["alt-send-button"]}>
              <FaPaperPlane color= "#fff"/>

              <span className={styles["send-text"]}>SEND</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
