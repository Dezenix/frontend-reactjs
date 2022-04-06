import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import styles from './index.module.css'

const getLocalStorage = ()=>{
  let data = JSON.parse(localStorage.getItem('list'));
  if(data){
    return data;
  }
  else return [] ;
}

function GroceryList() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState();
  const [alert, setAlert] = useState({
    value : false,
    text : '',
    type : ''
  });

  const showAlert = (value=false, text='', type='') => {
    setAlert({value, text, type});
  }



  const handleSubmit = (e)=>{
    e.preventDefault();
    if(name != ''){
      setList(preVal=>{
        let newList = {id:new Date().getTime().toString(), title:name};
        return [...preVal , newList];
      })
    setName('');
    showAlert(true, 'success', 'success');
  }
    if(name == ''){
      showAlert(true, 'please enter some item', 'danger');
    }
    if(name && isEditing){
      setList(
        list.map(item => {
          if(item.id === editId){
            return {
              ...item,
              title : name
            }
          }
          return item;
        })
      )
      setName('');
      setEditId(null);
      setIsEditing(false);
    }
  }

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
  },[list])


  const deleteItem = (id)=>{
      let newArray = list.filter(item=> item.id != id);
      setList(newArray);
      showAlert(true, 'Item deleted', 'danger');
  }
  const editItem = (id) =>{
    let itemToEdit = list.find(item=> item.id===id);
    setIsEditing(true);
    setEditId(id);
    setName(itemToEdit.title);
  }
  return(
    <section className={styles['sectionCenter']} >
      <form className={styles['grocery-form']} onSubmit={handleSubmit}>
        {alert.value && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>Add your Grocery Here</h3>
        <div className={styles['form-control']}>
        <input className={styles.grocery} value={name} onChange={(e)=>setName(e.target.value)} />
        <button type='submit' className={styles['submit-btn']}> {!isEditing ? 'Add Item' : 'Edit'}</button>
        </div>
      </form>
      {list.length > 0 &&
        <div className={styles['grocery-container']}>
      <List gList={list} deleteItem={deleteItem} editItem={editItem}/>
      </div>}
    </section>
  )
}

export default GroceryList
