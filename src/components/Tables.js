import classes from './Tables.module.css'
import {useReducer} from 'react';
import Score from './Score/Score';
import Buttons from './Buttons/Buttons';
import Equations from './Equations/Equations';
import reducer from './utils/reducer';
import { StateContext } from './utils/StateContext';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import React from 'react';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Tables = () => {
const obj = {0:"",1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:"",10:""}
let val = [];
const initialState = {
    randArray:[],
    num: 2,
    display: false,
    answerValue: obj,
    score: 0,
    loginUser: "",
    users: []
}

const [store, dispatch] = useReducer(reducer, initialState);
//const {randArray, num, display, answerValue} = store;
const {display, answerValue, loginUser} = store;
let tempRndArray=[];



const onClickHandler = (e) =>{
    let dispData;
    let tempScore=0;
    const answer = Object.values(answerValue);
    //console.log(val,answer)
    console.log(val)
    for(let i=1;i<=val.length;i++){
        console.log((i*val[i-1]),answer[i])
        if((i*val[i-1])===Number(answer[i])){
            tempScore+=1;
        }
    }
    if(display){
        dispData=false;
        dispatch({
            type: 'setAnswerValue',
            data: obj
        })

    }else{
        dispData=true;
    }
    dispatch({
        type: 'setDisplay',
        data: dispData
    })
    dispatch({
        type: 'setScore',
        data: tempScore
    })
}
const onChangeHandler = (e) =>{

    dispatch({
        type: 'setAnswerValue',
        data: {...answerValue,...{[e.target.name]: e.target.value}}
    })
 }
 const handleChange = (event) => {
 
        //setNum(event.target.value);
        dispatch({
            type: 'setNum',
            data: event.target.value
        })
        dispatch({
            type: 'setDisplay',
            data: false
        })
        dispatch({
            type: 'setAnswerValue',
            data: obj
        })

        if(event.target.value==="random"){
            for(let i=0;i<=10;i++){
                tempRndArray[i]=(Math.floor(Math.random() * (10)) + 1);
            }
            //setRandArray(tempRndArray)
            dispatch({
                type: 'setRandArray',
                data: tempRndArray
            })
        }
  };

    return (
    <div className = {classes.Table} >
        <StateContext.Provider value={{store, dispatch}}>
            <BrowserRouter>
            {!loginUser?
            <Routes>
                <Route path="/" element={ <SignInForm/>}/>
                <Route path="signuppath" element={ <SignUpForm/>}/>

                <Route path="guest" element={
                  <>
                    <h1>Welcome Guest</h1>
                    <div className = {classes.Page}>  
                        <Equations onChangeHandler={onChangeHandler} val={val}/>
                        <Buttons handleChange={handleChange} onClickHandler={onClickHandler}/>
                        <Score/>
                    </div>
                </>
                  } />

            </Routes> 
            :
                <>
                    <h1>Welcome to Math Practice {loginUser}</h1>
                    <div className = {classes.Page}>
                        <Equations onChangeHandler={onChangeHandler} val={val}/>
                        <Buttons handleChange={handleChange} onClickHandler={onClickHandler}/>
                        <Score/>
                    </div>
                </>
            }
            </BrowserRouter>
        </StateContext.Provider>
    </div>
      );
}
 
export default Tables;