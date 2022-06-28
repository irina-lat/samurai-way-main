import React from 'react';
import cl from './Post.module.css';


const Post = () => {
    return (
        <div className={cl.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511829_46.jpg"/>
            <div>комментарий</div>
        </div>
    );
}

export default Post;
