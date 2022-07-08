import React from 'react';
import cl from './Post.module.css';
import {PostsType} from "../../../../App";

type PostsPropsType = {
    posts: PostsType[]
}

const Post = (props: PostsPropsType) => {
    return (
        <div className={cl.item}>
            <div className={cl.itemblok}>
                {props.posts.map(p => {
                    return (
                        <div key={p.id}>
                            <div className={cl.imgstyle}>
                                <img src={p.img}/>
                            </div>
                            <p>{p.messages}</p>
                            <p>likesCount - {p.likesCount}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
        ;
}

export default Post;
