import React, { useEffect, useContext } from 'react';
import { MainContext } from '../context/MainContext';

const User = ( props ) => {
    // MainContext => see file ./context/MainContext.js
    // [user,setUser,..] -> destructurated notation, must be in order
    const [user, setUser, login, setLogin] = useContext(MainContext);

    useEffect(() => { 
        // useEffect => sort of 'DOM Ready' equivalent 
        fetch('http://localhost:8080/authentication/user_data', {
            method: 'GET',
            credentials: 'include' // mandatory for every JSON fetch
        })
        .then(response => response.json())
        .then((response) => {
                // update user object in the MainContext
                setUser(response.data);
            }
        )
    }, []);   
    
    // Lambda Function called by sign-in click event
    // Opens the login form by updating the login related state
    // within the MainContext
    const toggleSingIn = () => {
        // "latest" is the latest rendered state of the login context state object
        // this example updates a single attribute nested in the login state object in MainContext
        setLogin(latest => ({
            ...latest,
            is_open : !latest.is_open
        }));
    }

    const ConsoleLog = ({ children }) => {
        console.log(children);
        return false;
    };
    
    return (
        
        <section className="zone-user">
        { 
            !user.is_authenticated && 
            <section className="sign-in" onClick = { toggleSingIn }>Sign in</section> 
        }
        { 
            user.is_authenticated && 
            <section className="person">
                <section className="initials"> { user.initials } </section>
                <section className="details">
                    <section className="full-name"> { user.firstname + " " + user.lastname } </section>
                </section>
            </section>  
        }
        </section>
          
    );
}

export default User
