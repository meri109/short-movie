import React from 'react';
import { useDispatch } from 'react-redux';
import {loginAction, registerAction} from '../store/authSlice';

function Auth(props) {
    const usernameInputRef = React.useRef();
    const passwordInputRef = React.useRef();
    const firstNameInputRef = React.useRef();
    const lastNameInputRef = React.useRef();
    const emailInputRef = React.useRef();

    const dispatch = useDispatch()

    const submitHandler = React.useCallback(() => {
        if(props.type === 'login'){
            const username = usernameInputRef.current.value;
            const password = passwordInputRef.current.value;
            console.log('Login:', username, password);
            dispatch(loginAction(username, password))
        }else{
            const username = usernameInputRef.current.value;
            const firstName = firstNameInputRef.current.value;
            const lastName = lastNameInputRef.current.value;
            const email = emailInputRef.current.value;
            const password = passwordInputRef.current.value;
            console.log('Register:', username,  firstName, lastName, email, password );
            dispatch(registerAction(username, firstName, lastName, email,  password ))
        }
    }, [])

    const titleText = props.type === 'login' ? 'Login' : 'Register'


  return (
    <div className='auth'>
        <div className="container">
            <div className="title">{titleText}</div>
            <input type="text" className='username' placeholder='Username' ref={usernameInputRef}/>
                {props.type === 'register' && (
                    <>
                        <input 
                        type='text' 
                        placeholder='First name'
                        ref = {firstNameInputRef}
                        />
                        <input 
                        type='text' 
                        placeholder='Last name'
                        ref = {lastNameInputRef}
                        />
                        <input 
                        type='text' 
                        placeholder='Email'
                        ref = {emailInputRef}
                        />
                    </>
                )}
            <input type="text" className='password' placeholder='Password' ref={passwordInputRef}/>
            <div className="button-div">
                <button onClick={submitHandler} className='submit'>{titleText}</button>   
            </div>
        </div>
    </div>
  )
}

export default Auth