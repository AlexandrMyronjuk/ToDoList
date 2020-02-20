import React from 'react';
import s from './ListItem.module.css';

import EditButton from './EditButton/EditButton';
import SaveButton from './SaveButton/SaveButton';
import DelButton from './DelButton/DelButton';

const ListItem = () => {
    return (
        <li class={s.ListItem}>
            <span class={s.indNum}>1</span>
            <label class={s.inp}>
                <input disabled type="text" name="text" value="" />
            </label>
            <EditButton />
            <SaveButton />
            <DelButton />
	    </li>
    );
}

export default ListItem;