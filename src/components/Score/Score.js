import classes from './Score.module.css'
import { useGlobalState } from '../utils/StateContext';
const Score = () => {
    const {store} = useGlobalState();
    const {display,score} = store;
    return ( 
        <div >
            {display?
            <>
                <div className={classes.Score}>
                        <h1>{score}</h1>
                        <h1>/</h1>
                        <h1>10</h1>      
                </div>
                <div className={classes.Percentage}>
                    <h1>{score*10}%</h1>
                </div>
            </>
            :""}
        </div>
     );
}
 
export default Score;