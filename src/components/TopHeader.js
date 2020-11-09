import React from 'react'
import '../style/style.css'
import { Link } from 'react-router-dom'

export const TopHeader = () => {

    return (
        <section className="topHeaderContainer">
            <div>
                <p className="logo">The GuestBook</p>
            </div>
            <div className="topHeader">
                <Link to="/" className="topLink"><p>HOME</p></Link>
                <Link to="/SignupPage" className="topLink"><p>Sign up</p></Link>
                <Link to="/LoginPage" className="topLink"><p>Log in</p></Link>
            </div>
            
        </section>
    )
}