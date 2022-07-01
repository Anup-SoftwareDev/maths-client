import classes from './SignInForm.module.css'
import { useState } from 'react'
import { signIn } from './services/authServices'
import { useGlobalState } from './utils/StateContext'
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const   SignInForm = () => {
    const {store, dispatch} = useGlobalState();
    const {loginUser} = store;

    const initialFormData = {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    }

    const [formData, setFormData] = useState(initialFormData)
    
    const navigate = useNavigate();

    const someEventHandler = () => {
        navigate('signuppath');
    } 
    const guestEventHandler = () => {
        navigate('guest');
    } 

    const handleSubmit = (e) =>{
        e.preventDefault()
        signIn(formData)
            .then((user)=>{
                dispatch({
                    type: 'setLoginUser',
                    data: user.username
                })
            })
            
        }

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
        //console.log(formData)
    }

    return ( 
            <div className={classes.SignIn}>
                <h1>Sign In Form</h1>
                <form onSubmit={handleSubmit}>
                    
                    <div className={classes.Username}>
                        <label>Username:</label>
                        <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData}></input>
                    </div>
                    <div className={classes.Password}>
                        <label>Password:</label>
                        <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}></input>
                    </div>
                    <div className={classes.LoginButtons}>
                        <button type="submit">Sign In</button>
                        <button onClick={someEventHandler}>Sign Up</button>
                        <button onClick={guestEventHandler}>Guest</button>
                    </div>
                </form>
                
            </div>
     );
}
 
export default SignInForm ;