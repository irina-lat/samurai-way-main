import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsType, PostsType} from "../../../App";

type MyPostsPropsType = {
    myPosts: MyPostsType[]
    posts: PostsType[]
}

function MyPosts(props: MyPostsPropsType) {

    function onClickHandler() {
        return (console.log('MyPosts'))
    }

    function onChangeHandler() {
        return (console.log('MyPosts'))
    }

    return (
        <div>
            <p className={cl.title}>Написать пост</p>
            <div className={cl.myposts}>
                {props.myPosts.map(myPost => {
                    return (
                        <div className={cl.infophoto}>
                            <a href="#"><img src={myPost.avatar}/> </a>
                            <a href="#">{myPost.name}</a>
                        </div>
                    )
                })}
                <div className={cl.textareablock}>
                    <textarea className={cl.textarea} onChange={onChangeHandler} placeholder={'NEW Message'} name="text" id="post"/>
                    <button onClick={onClickHandler}>send</button>
                </div>
            </div>
            <Post posts={props.posts}/>
            <div className={`${cl.post} ${cl.item}`}>post 2</div>
        </div>
    );
}

export default MyPosts;
