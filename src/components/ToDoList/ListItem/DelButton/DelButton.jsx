import React from 'react';
import s from './DelButton.module.css';

const DelButton = () => {
    return (
        <div class={s.DelButton}>
            <button class={s.delBtn}>DEL</button>         
	    </div>
    );
}

export default DelButton;