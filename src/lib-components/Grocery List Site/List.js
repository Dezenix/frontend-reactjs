import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import styles from './index.module.css'

const List = ({gList,deleteItem,editItem}) => {
  return (
    <div className={styles['grocery-list']}>
      {gList.map(({id, title})=>{
        return (
          <article className={styles['grocery-item']} key={id} >
            <p className={styles.title} >{title}</p>
              <div className={styles['btn-container']} >
                  <button type='button' className={styles['edit-btn']} onClick={()=>editItem(id)}>
                     <FaEdit />
                  </button>
                  <button name='delete' type='button' className={styles['delete-btn']} onClick={(e)=>deleteItem(id)}>
                     <FaTrash /> 
                  </button>
              </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
