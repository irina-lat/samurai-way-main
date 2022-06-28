import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css' 
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile () {
  return (
    <div className={cl.profile} >
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;
