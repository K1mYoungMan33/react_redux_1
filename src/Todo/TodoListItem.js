import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";
import './TodoListItem.scss'
import cn from 'classnames';
import {BiCheckboxMinus} from "react-icons/bi";
import React from 'react';

export const TodoListItem=( { todo, onRemove, onToggle, style })=>{
    const { id, text, checked } = todo;

    return(
        <div className="TodoListItem-virtualized" style={style}>
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={()=>onToggle(id)} >
                { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/> }
                {/*<div>해야할 일</div>*/}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline/>
                <BiCheckboxMinus/>
            </div>
        </div>
        </div>
    )
};

export default React.memo( TodoListItem );