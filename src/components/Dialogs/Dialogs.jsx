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

let dialogsData = [
   {name: "Rexxar", id: 1},
   {name: "Thrall", id: 2},
   {name: "Jaina", id: 3},
   {name: "Rexxar", id: 4},
   {name: "Uther", id: 5}
]
let messagesData = [
    {message: "hey", id: 1},
    {message: "yoyoyo", id: 2},
    {message: "hello", id: 3}
 ]

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogs_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name="Medivh" id="5" />
            </div>
            <div className={cl.messages_items}>
                <Message text={messagesData[0].message} />
                <Message text={messagesData[1].message} />
                <Message text={messagesData[2].message} />
            </div>
        </div>


    )
}

export default Dialogs;