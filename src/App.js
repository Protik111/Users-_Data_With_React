import React from 'react';
import './App.css';
import Post from './componenets/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Postdetailmore from './componenets/Postdetailmore/Postdetailmore';
import NoFound from './componenets/NoFound/NoFound';



function App() {
  
  return (
    
     <Router>
       <Switch>
         <Route path="/home">
           <Post></Post>
         </Route>
         <Route exact path ="/">
           <Post></Post>
         </Route>
         <Route path = "/post/:postId">
           <Postdetailmore></Postdetailmore>
         </Route>
         <Route path="*">
           <NoFound></NoFound>
         </Route>
         <Route path="/post"></Route>
         <NoFound></NoFound>
       </Switch>
     </Router>


  );
}

export default App;
