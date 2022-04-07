import React, { useEffect } from 'react'
import styles from './index.module.css'

const Alert = ({text, type, removeAlert,list}) => {
  useEffect(()=>{
    let showingAlert = setTimeout(() => {
      removeAlert() 
    }, 3000);
    return ()=> clearTimeout(showingAlert);
  },[list])
  return (
    <p className={`${styles.alert} ${styles[`alert-${type}`]}`} >{text}</p>
  )
}

export default Alert
