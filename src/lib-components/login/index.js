import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsGoogle } from 'react-icons/bs'
import styles from './index.module.css'

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div
          className={`${styles['form-container']} ${styles['sign-in-container']}`}
        >
          <form className={styles.login_form}>
            <h1 className={styles.login_title}>Sign in</h1>
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
            <p className={styles.forget_pass}>Or use your account</p>
            <input name='email' placeholder='Email' type='email' />
            <input name='password' placeholder='Password' type='password' />
            <a href='#' className={styles.forgot_pass}>
              Forgot your password?
            </a>
            <button className={styles.login_btn}>Sign In</button>
          </form>
        </div>
        <div className={styles['overlay-container']}>
          <div className={styles.overlay}>
            <div
              className={`${styles['overlay-panel']} ${styles['overlay-right']}`}
            >
              <h1 className={styles.login_title}>Don't have an account?</h1>
              <p className={styles.login_desc}>
                Register and start your journey with us
              </p>
              <button className={styles.register_btn}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
