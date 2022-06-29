import React from 'react';
import cl from './Post.module.css';


const Post = () => {
    return (
        <div className={cl.item}>
            <div>
                <a href="#"><img src="https://klike.net/uploads/posts/2019-03/1551511829_46.jpg"/></a>
            </div>
            <div className={cl.itemblok}>
                <div>
                    <a href="#">Name</a>
                </div>
                <p>Добрый день, интересная статья</p>
            </div>
        </div>
    )
        ;
}

export default Post;
