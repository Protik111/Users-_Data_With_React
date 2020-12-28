import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Postdetailmore = () => {
    const {postId} = useParams();
    const [info, setInfo] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [])
    return (
        <div>
        <h3>hey {postId}</h3>
        <h4>name {info.name}</h4>
        </div>
    );
};

export default Postdetailmore;