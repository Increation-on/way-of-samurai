import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';


let dialogsData = [
   {name: "Rexxar", id: 1},
   {name: "Thrall", id: 2},
   {name: "Jaina", id: 3},
   {name: "Rexxar", id: 4},
   {name: "Uther", id: 5}
];



let messagesData = [
    {message: "hey", id: 1},
    {message: "yoyoyo", id: 2},
    {message: "hello", id: 3}
 ];

 

 let dialogsElements = dialogsData.map((el)=>{
    return  <DialogItem name={el.name} id={el.id} />
});

let messagesElements = messagesData.map((el)=>{
    return <Message text={el.message} />
});



const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogs_items}>
                { dialogsElements }
            </div>
            <div className={cl.messages_items}>
                { messagesElements }
            </div>
        </div>


    )
}

export default Dialogs;