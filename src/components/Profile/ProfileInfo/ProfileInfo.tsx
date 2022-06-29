import React from 'react';
import cl from './ProfileInfo.module.css'

type ProfileInfoPropsType ={
    avatar:string,
    time:string,
    description:string,
    name:string
}

function ProfileInfo(props:ProfileInfoPropsType) {
    return (
        <div className={cl.profileinfo}>
            <div className={cl.descriptionBlock}>
                <Avatar avatar={props.avatar}
                        name={props.name}
                        time={props.time}
                />
                <Description description={props.description}/>
            </div>

        </div>
    );
}

type AvatarPropsType={
    avatar:string,
    time:string,
    name:string
}

function Avatar(props:AvatarPropsType) {
    return (
        <div className={cl.avatar}>
            <div className={cl.photo}>
                {/*<a href="#"><img src='https://coolsen.ru/wp-content/uploads/2021/06/91_2.jpg' alt="avatar"/></a>*/}
                <a href="#"><img src={props.avatar} alt="avatar"/></a>
            </div>
            <div className={cl.avatarname} >
                <div>
                    <a href={'#'} >{props.name}</a>
                </div>
                <time>{props.time}</time>
            </div>
        </div>

    )
}

type DeescriptionPropsType={
    description:string
}

function Description(props:any) {
    return (
        <div className={cl.description} >
            <p>{props.description}</p>
            <div className={cl.image}>
                <img src='https://phonoteka.org/uploads/posts/2021-04/1618395532_41-phonoteka_org-p-anime-fon-les-48.jpg'></img>
            </div>
        </div>
    )
}


export default ProfileInfo;
