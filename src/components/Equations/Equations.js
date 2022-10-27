import classes from './Equations.module.css'
import { useGlobalState } from '../utils/StateContext';



const Equations = ({onChangeHandler,val}) => {
    const {store} = useGlobalState();
    const {num,randArray, answerValue,display} = store;
    //let val = [];
    const array = [1,2,3,4,5,6,7,8,9,10];

    
    return ( 
        <div className = {classes.Equations} > 
       
          {array.map((i)=>
            <div className = {classes.Equation}>  
                <input value ={i}></input> 
                <h1>X</h1>
                <input value ={val[i-1] = (num==="random"?randArray[i]:num)}></input>
                <h1>=</h1> 
                <input key = {i} name ={i} value = {answerValue[i]} onChange={onChangeHandler} autoComplete="off"></input>
                {display?answerValue[i]===String(i*val[i-1])?<h1 style = {{color:'green'}}>✓</h1>:
                <h1 style = {{color:'red'}}>✗ {String(i*val[i-1])}</h1>:''}
              
            </div> )}  
            {/*console.log(val, answerValue)*/}
        </div>
     );
}
 
export default Equations;