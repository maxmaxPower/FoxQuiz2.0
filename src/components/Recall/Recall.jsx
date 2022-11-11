import React from 'react'
import styles from './Recall.module.css';
import {AiOutlineMessage} from 'react-icons/ai'
const Recall = ({setCall,call}) => {
  return (
  
              <AiOutlineMessage style={{width:'70px',height:'70px'}} className={styles.fillMessage}
                 onClick={() => { setCall(!call)}}
              />
  
  )
}

export default Recall;