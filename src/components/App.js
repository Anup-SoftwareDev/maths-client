import axios from 'axios'
import React, {useState,useEffect } from 'react';
//import LoginForm from './LoginForm';
import Tables from './Tables';
import classes from './App.module.css'
//import SignUpForm from './SignUpForm';


const App = () => {
   const [score, setScore] = useState([{'result':5}]);
    //let scores = {data:"Scores before fetch"};
    useEffect(() => {
        //axios.get('https://ancient-plateau-75520.herokuapp.com/scores')
        axios.get('http://localhost:4000/scores')
        .then(response=>setScore(response))
    },[]);
    return ( 
        <div className={classes.Doc}>
            {console.log(score)}
           {/* {<h1>Times Tables</h1>}
            
            <SignUpForm/>*/}
            <Tables/>
           {/*{score.map(i=>console.log(i.result))}
            {score.map(i=><h1 key = {Number(i.id)}>{Number(i.id)}..{i.user_id}..{i.result}</h1>)}
            <LoginForm/>*/}
        </div>
        );
}
 
export default App;
