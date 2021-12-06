import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsGoogle } from 'react-icons/bs'
import styles from './index.module.css'

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <div
          className={`${styles['form-container']} ${styles['register-container']}`}
        >
          <form className={styles.register_form}>
            <h1 className={`${styles.register_title}`}>Register</h1>
            <div className={styles['social-container']}>
              <a href='#' className={styles.social}>
                <FaFacebookF />
              </a>
              <a href='#' className={styles.social}>
                <BsGoogle />
              </a>
              <a href='#' className={styles.social}>
                <FaLinkedinIn />
              </a>
            </div>
            <input type='text' name='name' placeholder='Username' />
            <input name='email' placeholder='Email' type='email' />
            <input name='password' placeholder='Password' type='password' />
            <button className={`${styles.register_btn}`}>register</button>
          </form>
        </div>
        <div className={styles['reg-overlay-container']}>
          <div className={styles.overlay}>
            <div
              className={`${styles['overlay-panel']} ${styles['overlay-right']}`}
            >
              <h1 className={styles.register_title}>
                Already have an account?
              </h1>
              <p className={styles.register_desc}>
                To keep connected with us please login with your personal info
              </p>
              <button className={styles.login_btn}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
