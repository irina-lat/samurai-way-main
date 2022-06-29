import React from 'react';
import cl from './Navbar.module.css'

type NavbarPropsType = {
    navbarDate: NavbarDateType[]
}

type NavbarDateType = {
    title: string
}

function Navbar(props: NavbarPropsType) {
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                {props.navbarDate.map((navbarDateArr, index) => {
                    return (
                        <a href="#">{navbarDateArr.title}</a>
                    )
                })}
            </div>

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

        </nav>);
}

export default Navbar;