import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";


const headerDate = {
    logo: "https://kartinkin.net/uploads/posts/2021-01/1610501112_2-p-kruglii-fon-dlya-logotipa-3.png"
}

// const navbarDate = [
//     {title: "Profile"},
//     {title: "Message"},
//     {title: "News"},
//     {title: "Music"},
//     {title: "Settings"}
// ]

export type profileInfoDateType = {
    avatar: string,
    time: string,
    description: string,
    name: string
    img: string
}

const profileInfoDate: profileInfoDateType = {
    avatar: 'https://coolsen.ru/wp-content/uploads/2021/06/91_2.jpg',
    name: 'Lana Force',
    time: '10:20 02.05.2022',
    description: "Леса России — территории России, покрытые лесной растительностью. Площадь лесов России составляет около\n" +
        '                809 млн га (8,09 млн км²), или около 20 % от всех лесов мира (по площади лесов Россия занимает первое\n' +
        '                место в мире). Леса покрывают 46,6 % территории России и оказывают значительное влияние на формирование\n' +
        '                её климата. По данным всемирной книги фактов ЦРУ по состоянию на 2018 год леса покрывают 49,4 %\n' +
        '                территории России и поэтому показателю среди всех государств и территорий мира Россия занимает 51 место\n' +
        '                в мире. Большинство лесов страны занято хвойными породами деревьев. Эксплуатационные леса\n' +
        '                занимают в России площадь около 598 млн га. По Лесному кодексу имеются также леса, не входящие в\n' +
        '                лесные земли. Общая площадь лесов в России, включая земли лесного фонда, особо охраняемых территорий,\n' +
        "                обороны, населенных пунктов и иных категорий, составляет 1 187,6 млн га.",
    img: 'https://phonoteka.org/uploads/posts/2021-04/1618395532_41-phonoteka_org-p-anime-fon-les-48.jpg'
}

const myPosts = [
    {textarea: 'New Message'},
    {avatar: 'https://coolsen.ru/wp-content/uploads/2021/06/91_2.jpg'},
    {name: 'Lana Force'},
    {description: 'Интересная статья'}
]


function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header logo={headerDate.logo}/>
                {/*<Navbar navbarDate={navbarDate}/>*/}
                <Navbar/>

                {/*<Profile profileInfoDate={profileInfoDate}/>*/}
                {/*<Dialogs/>*/}

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={"/profile"} element={<Profile profileInfoDate={profileInfoDate}/>}/>
                        <Route path={"/dialogs/*"} element={<Dialogs/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
