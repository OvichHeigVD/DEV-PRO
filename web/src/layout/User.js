import React, { Component } from 'react';

class User extends Component{
    constructor(props){
        super(props);
        this.state = props.user;
        this.handleLoginFormToggle = this.handleLoginFormToggle.bind(this);
    }

    componentDidMount(){
        // DOM Ready
        fetch('http://localhost:8080/authentication/user_data', {
            method: 'GET',
            credentials: 'include'
        })
        
        .then(response => response.json())
        .then(
            (response) => {
                this.props.userStateChange(response);
            }
        )
    }

    handleLoginFormToggle(){
        this.props.toggleLoginForm();
    }

    render(){         
        return (
            <section className="zone-user">
                { 
                    ( !this.props.user || ( this.props.user && !this.props.user.is_authenticated ) ) && 
                    <section className="sign-in" onClick = { this.handleLoginFormToggle } >Sing in</section> 
                }
                { 
                    this.props.user && this.props.user.is_authenticated && 
                    <section className="person">
                        <section className="initials"> { this.props.user.initials } </section>
                        <section className="details">
                            <section className="full-name"> { this.props.user.firstname + " " + this.props.user.lastname } </section>
                        </section>
                    </section>  
                }
            </section>
        );       
    }
}

export default User
