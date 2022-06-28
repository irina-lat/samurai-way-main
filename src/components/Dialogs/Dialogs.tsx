import React from 'react';
import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs() {

    function onSendMessageClick() {
        return (console.log('Dialogs'))
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}><DialogItem/></div>
            <div className={cl.messages}>
                <Message/>
                <div><textarea value={"xxx"} placeholder='YOU Message'> </textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs