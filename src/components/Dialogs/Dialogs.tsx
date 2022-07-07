import React from 'react';
import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from "../../App";


type DialogsPropsType={
    dialogsPage: DialogsPageType
}

function Dialogs(props:DialogsPropsType) {

    function onClickHandlerSendMessage() {
        return (console.log('SendMessage'))
    }

    function onChangeHandlerMessage() {
        return (console.log('Message'))
    }


    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <DialogItem dialogs={props.dialogsPage.dialogs}/>
            </div>
            <div className={cl.messages}>
                <Message messages={props.dialogsPage.messages}/>

                <div><textarea onChange={onChangeHandlerMessage} value={"xxx"} placeholder='YOU Message'> </textarea></div>
                <div>
                    <button onClick={onClickHandlerSendMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs