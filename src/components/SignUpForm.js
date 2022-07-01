import classes from './SignUpForm.module.css'
import { useState } from 'react'
import { signUp } from './services/authServices'
import { useGlobalState } from './utils/StateContext'
import { useNavigate } from 'react-router-dom';


const   SignUpForm = () => {
    const {dispatch} = useGlobalState();
 //   const {loginUser} = store;
    const navigate = useNavigate();

    const initialFormData = {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e)
        console.log(formData)
        signUp(formData)
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
        console.log(formData)
    }

    const someEventHandler = () => {
        navigate('/');
    } 
    const guestEventHandler = () => {
        navigate('../guest');
    } 

    return ( 
            <div className={classes.SignUp}>
                <h1>Sign Up Form</h1>
                <form onSubmit={handleSubmit}>
                    
                    <div className={classes.Username}>
                        <label>Username:</label>
                        <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData}></input>
                    </div>
                    <div className={classes.Email}>
                        <label>Email:</label>
                        <input type="text" name="email" id="email" value={formData.email} onChange={handleFormData}></input>
                    </div>
                    <div className={classes.Password}>
                        <label>Password:</label>
                        <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}></input>
                    </div>
                    <div className={classes.PasswordConfirmation}>
                    <label>Password Confirmation:</label>
                        <input type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} onChange={handleFormData}></input>
                    </div>
                
                    <button type="submit">Sign up</button>
                    <button onClick={someEventHandler}>Sign In</button>
                    <button onClick={guestEventHandler}>Guest</button>
                </form>
                
            </div>
     );
}
 
export default SignUpForm ;