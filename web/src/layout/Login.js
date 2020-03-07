import React, { useContext, setState, useState } from 'react';
import { MainContext } from '../context/MainContext';
import { useInput } from '../hooks/input';

const Login = () => {
    
    const { value:email,        bind:bindEmail      } = useInput('');
    const { value:password,     bind:bindPassword   } = useInput('');
    
    const [ user, setUser, login, setLogin ] = useContext(MainContext);
    
    const buttonSignIn = () => {
        fetch('http://localhost:8080/authentication/user_login', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: "email=" + email + "&password=" + password
            })
        .then(response => response.json())
        .then(response => setUser(response.data));
    }

    const ConsoleLog = ({ children }) => {
        console.log(children);
        return false;
    };
     
    return (
    
        <section className={ "floating-form login-form " + ( login.is_open ? 'visible' : '' ) } >
            <ConsoleLog>{ login }</ConsoleLog>
            <header>Sign-In</header>
            <section className="row">
                <section className="label">Email</section>
                <section className="input">
                    <input type="text"  { ...bindEmail }  />
                    </section>
            </section>
            <section className="row">
                <section className="label">Password</section>
                <section className="input">
                    <input type="password" { ...bindPassword } />
                </section>
            </section>
            <footer>
                <button className="button sing-in" onClick = { buttonSignIn }>Sing In</button>
            </footer>
        </section>
    )
}

export default Login;