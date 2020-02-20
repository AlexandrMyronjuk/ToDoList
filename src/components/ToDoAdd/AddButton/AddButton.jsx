import React from 'react';
import s from './AddButton.module.css';

const AddButton = () => {
    return (
        <div className={s.AddButton}>
            <button className={s.addBtn}>ADD</button>
        </div>
    );
}

export default AddButton;