import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Postbody from '../Postbody/Postbody';
import Comments from '../Comment/Comments';

const Postdetailmore = () => {
    const {postId} = useParams();
    const [info, setInfo] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [])

    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');

    useEffect(() =>{
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            setPhoto(data.results[0].picture.large);
            setName(data.results[0].name.first + ' ' + data.results[0].name.last);
        })
    },[])

    return (
        <div>
        <Postbody info={info} photo={photo} name={name}></Postbody>
        <Comments id={postId}></Comments>
        </div>
    );
};

export default Postdetailmore;