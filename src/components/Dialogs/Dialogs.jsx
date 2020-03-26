import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((el)=>{
        return  <DialogItem name={el.name} id={el.id} />
    });  
    let messagesElements = props.messagesData.map((el)=>{
        return <Message text={el.message} />
    });

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