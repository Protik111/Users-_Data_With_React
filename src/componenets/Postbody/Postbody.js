import React from 'react';
import './Postbody.css'

const Postbody = (props) => {
    const {id, title,body} = props.info;
    const {info, photo, name} = props;
    return (
        <div className="post-container">
            <div className="post-body">
                <p className="userName">{name}<span>'s</span> Post</p>
                <hr/>
                <p className="userId">UserId : {id}</p>
                <p>Title : {title}</p>
                <p>Body : {body}</p>
            </div>
            <div className="post-img">
                <img src={photo} alt=""/>
                <p className="userName">{name}</p>
            </div>
        </div>
    );
};

export default Postbody;