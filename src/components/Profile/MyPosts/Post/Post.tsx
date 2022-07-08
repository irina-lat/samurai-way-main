import React from 'react';
import cl from './Post.module.css';
import {PostsType} from "../../../../App";

type PostsPropsType = {
    posts: PostsType[]
}

const Post = (props: PostsPropsType) => {
    return (
        <div >
            {props.posts.map(p => {
                return (
                    <div key={p.id} className={cl.item}>
                        <div className={cl.imgstyle}>
                            <img src={p.img}/>
                            <div>name</div>
                        </div>
                        <div className={cl.message}>
                            <p className={cl.post}>{p.messages}</p>
                            <p className={cl.like}>likesCount - {p.likesCount}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
        ;
}

export default Post;
