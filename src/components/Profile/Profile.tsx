import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../App";



type ProfilePropsType = {
    profilePage: ProfilePageType
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={cl.profile}>
            <ProfileInfo profileInfoDate={props.profilePage.profileInfoDate}/>
            <MyPosts myPosts={props.profilePage.myPosts}
                     posts={props.profilePage.posts}/>
        </div>
    );
}

export default Profile;
