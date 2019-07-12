import React from 'react';
import PropTypes from 'prop-types';

export default function Footer(props) {
    let User = 'Admin'
    let Password = 'password123';

    function handleEmployeeLoginAttempt(e){
        e.preventDefault();
        if( Password === password.value && User === user.value){
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
            placeholder="Username"
            type="text"
            ref={(input) => {user = input;}}
            />

            <input 
            placeholder="password" 
            type="text"
            ref={(input) => {password = input;}}
            />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

Footer.propTypes = {
    onEmployeeLogin: PropTypes.func
}
