import React from 'react'
import styles from './index.module.css'
import Navigation from './navigation'
import Footer from './footer'

const ComplexComponent = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <Footer />
    </div>
  )
}

export default ComplexComponent
