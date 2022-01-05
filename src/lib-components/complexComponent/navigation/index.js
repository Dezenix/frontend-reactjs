import React from 'react'
import styles from './index.module.css'
import { generateRandom } from '../footer/utils'

const Navigation = () => {
  const str = generateRandom()
  return (
    <div className={styles.navigation}>
      This is a navigation component. Here is a random string "{str}"
    </div>
  )
}

export default Navigation
