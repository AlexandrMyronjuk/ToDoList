import React from 'react';
import s from './ToDoList.module.css'

import ListItem from './ListItem/ListItem';

const ToDoList = () => {
    return (
        <div className={s.ToDoList}>
            <ul className={s.box}>
               <ListItem />    
            </ul>
      </div>
    );
}

export default ToDoList;