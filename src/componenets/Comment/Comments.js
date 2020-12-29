import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Commentss from '../Commentss/Commentss';

const Comments = (props) => {
    const id =props.id;
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(data => setComment(data))
    },[])
    return (
        <div>
            {
                comment.map(com =><Commentss comments={com}></Commentss>)
            }
        </div>
    );
};

export default Comments;