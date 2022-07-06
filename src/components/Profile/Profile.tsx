import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {profileInfoDateType} from "../../App";


type ProfilePopsType = {
    profileInfoDate: profileInfoDateType
}

function Profile(props: ProfilePopsType) {
    return (
        <div className={cl.profile}>
            <ProfileInfo profileInfoDate={props.profileInfoDate} />
            <MyPosts/>
        </div>
    );
}

export default Profile;
