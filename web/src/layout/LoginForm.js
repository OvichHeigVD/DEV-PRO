import React from 'react';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.inputChange    = this.inputChange.bind(this);
        this.buttonSignIn   = this.buttonSignIn.bind(this);
    }

    buttonSignIn(){
        fetch('http://localhost:8080/authentication/user_login', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: "email=" + this.state.email + "&password=" + this.state.password
            })
        .then(response => response.json())
        .then(response => this.props.userStateChange(response));
    }

    inputChange(input){
        this.setState({ [input.target.name] : input.target.value })
    }

    render(){
        const isOpen = this.props.isOpen; // managed by App
        return (
            <section className={ "floating-form login-form " + ( isOpen ? 'visible' : '' ) } >
                <header>Sign-In</header>
                <section className="row">
                    <section className="label">Email</section>
                    <section className="input"><input type="text" name="email" value = { this.props.email } onChange = { this.inputChange } /></section>
                </section>
                <section className="row">
                    <section className="label">Password</section>
                    <section className="input"><input type="password" name="password" value = { this.props.password } onChange = { this.inputChange } /></section>
                </section>
                <footer>
                    <button className="button sing-in" onClick = { this.buttonSignIn }>Sing In</button>
                </footer>
            </section>
        )
    }
}

export default LoginForm;