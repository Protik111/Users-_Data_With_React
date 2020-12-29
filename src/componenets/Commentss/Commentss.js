import React, { useState } from 'react';
import './Commentss.css'
import { useEffect } from 'react';

const Commentss = (props) => {
    const { body, email } = props.comments;

    const [pic, setPic] = useState('')

    const [name, setName] = useState('')

    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            setPic(data.results[0].picture.large);
            setName(data.results[0].name.first + ' ' + data.results[0].name.last)
        })
    }, [])
   
    return (
       <div className="post-container2">
            <div className="post-body">
                <p className="userName">{name}<span>'s</span> Comment</p>
                <hr/>
                <p>Comment : {body}</p>
                <p>Email: {email}</p>
            </div>
            <div className="post-img">
                <img src={pic} alt=""/>
                <p className="userName">{name}</p>
            </div>
        </div>
    );
};

export default Commentss;