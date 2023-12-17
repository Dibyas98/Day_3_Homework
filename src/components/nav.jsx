import React from 'react'
import './nav.css'

function Nav(props){
    return(
        <ul >
            <li className={`nav-${props.mode}`}>home</li>
            <li className={`nav-${props.mode}`}>about</li>
            <li className={`nav-${props.mode}`}>services</li>
            <li className={`nav-${props.mode}`}>faq</li>
            <li className={`nav-${props.mode}`}>contact</li>
        </ul>
        
    );
}
export default Nav