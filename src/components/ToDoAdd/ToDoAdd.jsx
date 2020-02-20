import React from 'react';
import s from './ToDoAdd.module.css'

import AddButton from './AddButton/AddButton';

const ToDoAdd = () => {
    return (
        <div className={s.ToDoAdd}>
            <label className={s.addInp}>
                <input type="text" name="text" placeholder="Add to do" />
            </label>
            <AddButton />
        </div>
    );
}

export default ToDoAdd;