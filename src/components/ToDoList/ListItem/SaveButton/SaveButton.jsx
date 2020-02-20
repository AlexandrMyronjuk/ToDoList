import React from 'react';
import s from './SaveButton.module.css';

const SaveButton = () => {
    return (
        <div class={s.SaveButton}>
            <button class={s.saveBtn}>SAV</button>         
	    </div>
    );
}

export default SaveButton;