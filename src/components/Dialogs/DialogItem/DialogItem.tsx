import React from 'react';
import cl from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../App";


type DialogItemPropsType={
    dialogs:DialogsType[]
}

function DialogItem(props:DialogItemPropsType) {
    return (
        <div className={cl.dialog}>
            <div>
                {props.dialogs.map(d => {
                    return (
                        <div>
                        <NavLink to={"dialog/" + d.id}>
                            {d.name}
                        </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default DialogItem;