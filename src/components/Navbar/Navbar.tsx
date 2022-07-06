import React from 'react';
import cl from './Navbar.module.css'
import {NavLink} from "react-router-dom";

// type NavbarPropsType = {
//     navbarDate: NavbarDateType[]
// }
//
// type NavbarDateType = {
//     title: string
// }

function Navbar() {
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                <NavLink to='/Profile' className = { navData => navData.isActive ? cl.active : cl.item }>Profile</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='/Dialogs'className = { navData => navData.isActive ? cl.active : cl.item } >Message</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='#'>News</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='#'>Music</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='#'>Settings</NavLink>
            </div>
        </nav>);


            {/*<div className={cl.item}>*/}
            {/*    {props.navbarDate.map((navbarDateArr, index) => {*/}
            {/*        return (*/}
            {/*            <a href="#">{navbarDateArr.title}</a>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}

            {/*<div className={cl.item}>*/}
            {/*    <a>{props.navbarDate[0].title}</a>*/}
            {/*</div>*/}
            {/*<div className={cl.item}>*/}
            {/*    <a>{props.navbarDate[1].title}</a>*/}
            {/*</div>*/}
            {/*<div className={cl.item}>*/}
            {/*    <a>{props.navbarDate[2].title}</a>*/}
            {/*</div>*/}
            {/*<div className={cl.item}>*/}
            {/*    <a>{props.navbarDate[3].title}</a>*/}
            {/*</div>*/}
            {/*<div className={cl.item}>*/}
            {/*    <a>{props.navbarDate[4].title}</a>*/}
            {/*</div>*/}

}

export default Navbar;