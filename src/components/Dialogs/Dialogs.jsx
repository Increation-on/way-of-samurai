import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((el) => {
        return <DialogItem name={el.name} id={el.id} />
    });
    let messagesElements = props.messagesData.map((el) => {
        return <Message text={el.message} />
    });


    let newMessageElement = React.createRef();
    let sendMessage = ()=>{
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={cl.messages_items}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>send</button>
            </div>

        </div>


    )
}

export default Dialogs;