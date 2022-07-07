import React from 'react';
import cl from './Message.module.css';
import {MessagesType} from "../../../App";


type MessagePropsType = {
    messages: MessagesType[]
}

function Message(props: MessagePropsType) {
    return (
        <div className={cl.dialog}>{props.messages.map((m) => {
            return (
                <div className={cl.messages} key={m.id}>
                    <div>{m.messages}</div>
                </div>
            )
        })}
        </div>
    )
}

export default Message;