import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {profileInfoDateType} from "../../App";


type ProfilePropsType = {
    profileInfoDate: profileInfoDateType
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={cl.profile}>
            <ProfileInfo profileInfoDate={props.profileInfoDate} />
            <MyPosts/>
        </div>
    );
}

export default Profile;
