import classes from './Buttons.module.css';
import { useGlobalState } from '../utils/StateContext';
import { useNavigate } from 'react-router-dom';
import { showResults } from '../services/scoreServices';
import {showUsers} from '../services/authServices'
import React, { useState } from 'react';
//import reducer from '../utils/reducer';

const Buttons = ({handleChange, onClickHandler}) => {
    const {store,dispatch} = useGlobalState();
    const [score, setScore] = useState([{'result':""}]);
    const navigate = useNavigate();
    const {num,display,loginUser, users} = store;
    const array = [1,2,3,4,5,6,7,8,9,10];
    const onLogInOutHandler = () =>{
        if(loginUser){
            dispatch({
                type: 'setLoginUser',
                data: ""
            })
        }
        navigate("/")
    }
    const showResultsHandler = () =>{
        showResults()
        .then(response=>setScore(response))
        console.log(score)
        showUsers()
        .then(response=>{
            console.log(response)
            dispatch({
                type: 'setUsers',
                data: response
            })
            console.log(users)
        })
    }
   
    return ( 
        <div className = {classes.Buttons}>
            <label>
                Multiplication No:
                <select value={num} onChange={handleChange}>
                    <option key = "random" value="random">Random</option>
                    {array.map((i)=><option key={i} value={i}>{i}</option>)} 
                </select>
            </label> 
            <button onClick={onClickHandler}>{display?"Clear Results":"See Results"}</button>
            <button onClick={onLogInOutHandler}>{loginUser?"Log Out":"Sign In"}</button>
            {loginUser&& <button onClick={showResultsHandler}>Show Results</button>}
                {console.log(loginUser)}

                {score[0].result&&users.length?score.map(i=>(
                loginUser===users[i.user_id-1].username?
                <h1 key = {Number(i.id)}>{`${Number(i.id)}.User:${users[i.user_id-1].username} Result:${i.result}`}</h1>
                :""))

                :""}
            
        </div>
     );
}
 
export default Buttons;