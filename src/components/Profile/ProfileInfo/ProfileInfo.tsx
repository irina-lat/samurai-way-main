import React from 'react';
import cl from './ProfileInfo.module.css'
import {ProfileInfoDateType} from "../../../App";


type ProfileInfoPropsType = {
    profileInfoDate: ProfileInfoDateType[]
}

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div className={cl.profileinfo}>
            <div className={cl.descriptionBlock}>
                {props.profileInfoDate.map((profileInfo)=> {
                    return(
                        <div>
                        <Avatar profileInfoDate={profileInfo}/>
                        <Description profileInfoDate={profileInfo}/>
                        </div>
                )})}

            </div>
        </div>
    )
}

type AvatarPropsType = {
    profileInfoDate: ProfileInfoDateType
}

function Avatar(props: AvatarPropsType) {
    return (
        <div className={cl.avatar}>
            <div className={cl.photo}>
                <a href="#"><img src={props.profileInfoDate.avatar} alt="avatar"/></a>
            </div>
            <div className={cl.avatarname}>
                <div>
                    <a href={'#'}>{props.profileInfoDate.name}</a>
                </div>
                <time>{props.profileInfoDate.time}</time>
            </div>
        </div>

    )
}

type DescriptionPropsType = {
    profileInfoDate: ProfileInfoDateType
}

function Description(props: DescriptionPropsType) {
    return (
        <div className={cl.description}>
            <p>{props.profileInfoDate.description}</p>
            <div className={cl.image}>
                <img src={props.profileInfoDate.img}></img>
            </div>
        </div>
    )
}


export default ProfileInfo;
