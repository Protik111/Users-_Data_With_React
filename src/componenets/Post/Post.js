import React from 'react';
import { useState, useEffect } from 'react';
import Postdetails from '../PostDetails/Postdetails';

const Post = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])
    return (
        <div>
           {
               posts.map(post => <Postdetails key={post.id} post ={post}></Postdetails>)
           }
        </div>
    );
};

export default Post;