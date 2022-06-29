import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


type ProfilePopsType= {
    avatarValue:string,
    timeValue:string,
    descriptionValue:string,
    nameValue:string
}

function Profile(props: ProfilePopsType) {
    return (
        <div className={cl.profile}>
            <ProfileInfo avatar={props.avatarValue}
                         name={props.nameValue}
                         time={props.timeValue}
                         description={props.descriptionValue}
            />
            <MyPosts />
        </div>
    );
}

export default Profile;
