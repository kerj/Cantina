import React from 'react';
import PropTypes from 'prop-types';

export default function Employee(props) {
    let User = 'Admin'
    let Password = 'password123';
    let inputUser = null;
    let inputPassword = null;

    function handleEmployeeLoginAttempt(e){
        e.preventDefault();
        
        if(Password === inputPassword.value && User === inputUser.value){
            props.onEmployeeLogin();
            password.value = '';
            user.value = '';
        }else {
            password.value = '';
            user.value = '';
        }
    }
    return (
        
        <div>
            <h4>Employee Login</h4>
            <form onSubmit={handleEmployeeLoginAttempt}>
            <input 
            id='user'
            placeholder="Username"
            type="text"
            ref={(input) => {inputUser = input;}}
            />

            <input 
            id='password'
            placeholder="password" 
            type="text"
            ref={(input) => {inputPassword = input;}}
            />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

Employee.propTypes = {
    onEmployeeLogin: PropTypes.func
}
