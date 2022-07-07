import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts() {

    function onClickHandler() {
        return (console.log('MyPosts'))
    }

    function onChangeHandler() {
        return (console.log('MyPosts'))
    }

    return (
        <div className={cl.postsBlock}>
            <div className={cl.title}>my post</div>
            <div className={cl.textarea}>
                <textarea  onChange={onChangeHandler} placeholder={'NEW Message'}  name="text" id="post"/>
                {/*<textarea rows="5" cols="30" placeholder={'NEW Message'}  name="text" id="post"/>*/}
                <button onClick={onClickHandler}>send</button>
            </div>
            <Post/>
            <Post/>
            <div className={`${cl.post} ${cl.item}`}>post 2</div>
        </div>
    );
}

export default MyPosts;
