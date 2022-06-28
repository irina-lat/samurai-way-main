import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts() {

    function onClickHandler() {
        return (console.log('MyPosts')) }

    return (
        <div className={cl.postsBlock}>
            <div className={cl.title}>my post</div>

            <textarea value={'props.newPostText'} name="text" id="post"/>

            <button onClick={onClickHandler}>send</button>
            <Post/>
            <Post/>
            <div className={`${cl.post} ${cl.item}`}>post 2</div>
        </div>
    );
}

export default MyPosts;
