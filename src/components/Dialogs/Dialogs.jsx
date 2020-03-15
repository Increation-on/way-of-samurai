import React from 'react';
import cl from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogs_items}>
                <div className={cl.item}>
                    Rexxar
                        </div>
                <div className={cl.item}>
                    Thrall
                        </div>
                <div className={cl.item}>
                    Jaina
                        </div>
                <div className={cl.item}>
                    Uther
                        </div>
                <div className={cl.item}>
                    Medivh
                        </div>
            </div>
            <div className={cl.messages_items}>
                <div className={cl.message}>m: heq</div>
                <div className={cl.message}>m: yououy</div>
                <div className={cl.message}>m: pudge</div>
            </div>
        </div>


    )
}

export default Dialogs;