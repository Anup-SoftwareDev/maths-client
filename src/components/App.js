import axios from 'axios'
import React, { useState, useEffect } from 'react';

const App = () => {
    const [score, setScore] = useState([{'result':5}]);
    //let scores = {data:"Scores before fetch"};
    useEffect(() => {
        axios.get('https://ancient-plateau-75520.herokuapp.com/scores')
        .then(response=>setScore(response.data))
    },[]);
    return ( 
        <>
            <h1>App</h1>
            <h1>{score[0].result}</h1>
            {score.map(i=>console.log(i.result))}
            {score.map(i=><h1>{i.id}..{i.result}</h1>)}
        </>
        );
}
 
export default App;
