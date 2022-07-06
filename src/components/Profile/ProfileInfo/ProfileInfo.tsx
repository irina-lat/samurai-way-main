import React from 'react';
import cl from './ProfileInfo.module.css'
import {profileInfoDateType} from "../../../App";


type ProfileInfoPropsType = {
    profileInfoDate: profileInfoDateType
}

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div className={cl.profileinfo}>
            <div className={cl.descriptionBlock}>
                <Avatar avatar={props.profileInfoDate.avatar} time={props.profileInfoDate.time}
                        name={props.profileInfoDate.name}/>
                <Description description={props.profileInfoDate.description} img={props.profileInfoDate.img}/>
            </div>
        </div>
    )
}

type AvatarPropsType = {
    avatar: string,
    time: string,
    name: string
}

function Avatar(props: AvatarPropsType) {
    return (
        <div className={cl.avatar}>
            <div className={cl.photo}>
                <a href="#"><img src={props.avatar} alt="avatar"/></a>
            </div>
            <div className={cl.avatarname}>
                <div>
                    <a href={'#'}>{props.name}</a>
                </div>
                <time>{props.time}</time>
            </div>
        </div>

    )
}

type DescriptionPropsType = {
    description: string,
    img: string
}

function Description(props: DescriptionPropsType) {
    return (
        <div className={cl.description}>
            <p>{props.description}</p>
            <div className={cl.image}>
                <img src={props.img}></img>
            </div>
        </div>
    )
}


export default ProfileInfo;
