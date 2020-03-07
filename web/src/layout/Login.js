import React, { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import SignInSide from './SignInSide';

const Login = () => {

    const [ user, setUser, login, setLogin ] = useContext(MainContext);
    
    const ConsoleLog = ({ children }) => {
        console.log(children);
        return false;
    };
     
    return (
        <SignInSide is_open = { login.is_open } />
    );

    /*return (
        
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
    )*/
}

export default Login;