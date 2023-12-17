import React, { useState } from 'react'
import Logo from './logo';
import Nav from './nav';

function Header(props){
    // const [mode, setMode] = useState('light ');
    return(
        <header>
            <Logo mode={props.mode} too = {props.toggle}></Logo>
        <Nav mode={props.mode}></Nav>
        </header>
        
    );
};
export default Header