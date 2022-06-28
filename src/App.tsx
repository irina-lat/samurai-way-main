import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
// import Dialogs from "./components/Dialogs/Dialogs";


const headerDate = {
    logo: 'https://kartinkin.net/uploads/posts/2021-01/1610501112_2-p-kruglii-fon-dlya-logotipa-3.png'
}

const navbarDate = [
    {title: "Propfile"},
    {title: "Message"},
    {title: "News"},
    {title: "Music"},
    {title: "Settings"}
]

function App() {
    return (
        <div className="app-wrapper">
            <Header logo={headerDate.logo}/>
            <Navbar navbarDate={navbarDate}/>
            <div className='app-wrapper-content'>
                <Profile/>
                {/*<Dialogs/>*/}

            </div>
        </div>
    )
}

export default App;
