import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './PostDetail.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Postdetails = (props) => {
    const {title, id, body} = props.post;

    const classes = useStyles();

    return (
        <div>

            <Card className={classes.root} id="card">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                <span className="userInfo">User's Information</span> 
                </Typography>
                <hr/>
                <Typography variant="h5" component="h2" className="postTitle">
                 User's Id : {id}
                </Typography>
                <p><span className="postTitle">Post Title</span> : {title}</p>
                <p><span className="postTitle">Post Body</span> : {body}</p>
            </CardContent>
            <div className="btn">
                <button className="btn2" > <Link to ={`/post/${id}`}>More Details</Link></button>
            </div>
            </Card>
        </div>
    );
};

export default Postdetails;