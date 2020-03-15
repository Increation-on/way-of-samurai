import React from 'react';
import cl from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={cl.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
    <div className={cl.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogs_items}>
                <DialogItem name="Rexxar" id="1" />
                <DialogItem name="Thrall" id="2" />
                <DialogItem name="Jaina" id="3" />
                <DialogItem name="Uther" id="4" />
                <DialogItem name="Medivh" id="5" />
            </div>
            <div className={cl.messages_items}>
                <Message text="hey"/>
                <Message text="yoyoyo"/>
                <Message text="hello"/>
            </div>
        </div>


    )
}

export default Dialogs;