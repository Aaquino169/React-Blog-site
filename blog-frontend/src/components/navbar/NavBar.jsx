import React from 'react'
import "./navbar.css"


export default function NavBar() {
    const user = true;
    

    return (
        <div className="nav">
            <div className="navLeft">
            <i className="navIcon fab fa-twitter-square"></i>
            <i className="navIcon fab fa-facebook-square"></i>
            <i className="navIcon fab fa-instagram-square"></i>
            <i className="navIcon fab fa-pinterest-square"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">HOME</li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">CONTACT</li>
                    <li className="navListItem">WRITE</li>
                    <li className="navListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="navRight">
                <img 
                    className="navImg" 
                    src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/dribble_pic.png" 
                    alt="" 
                />
                <i className="navSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
