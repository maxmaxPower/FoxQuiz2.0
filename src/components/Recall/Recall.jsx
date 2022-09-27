import React from 'react'
import styles from './Recall.module.css'

const Recall = ({setCall,call}) => {
  return (
    <div className={styles.recall}>
              <button onClick={() => { setCall(!call)}}>Contact us </button>
    </div>
  )
}

export default Recall;