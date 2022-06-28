import React from 'react';
import cl from './Header.module.css'


type HeaderPropsType={
    logo:string
}

function Header(props:HeaderPropsType) {
    return (
        <header className={cl.header}>
            <img src={props.logo} alt="logo"/>

        </header>);
}

export default Header;