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


export type PostsType={
    id: number
    img: string
    messages: string
    likesCount: string
}

export type MyPostsType={
    avatar:string
    name: string
}

export type ProfileInfoDateType = {
    avatar: string
    name: string
    time: string

    description: string
    img: string
}

export type ProfilePageType={
    profileInfoDate: Array<ProfileInfoDateType>
    myPosts: Array<MyPostsType>
    posts: Array<PostsType>
}

const profilePage : ProfilePageType = {
    profileInfoDate: [
        {
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
        },
    ],

    myPosts: [
        {
            avatar: 'https://klike.net/uploads/posts/2019-03/1551511829_46.jpg',
            name: 'Happy Dog'
        }
    ],

    posts: [
        { id: 1, img: "https://klike.net/uploads/posts/2019-03/1551511829_46.jpg", messages: 'Hey, how are you?', likesCount: 'like' },
        { id: 2, img: "https://klike.net/uploads/posts/2019-03/1551511829_46.jpg", messages: "It's my first post", likesCount: 'like' }
    ]
}


export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    messages: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

const dialogsPage: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Irina'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Anna'}
    ],
    messages: [
        {id: 1, messages: 'Hey, how are you?'},
        {id: 2, messages: 'Ok, so good'},
        {id: 3, messages: 'Nice day!'},
        {id: 4, messages: 'GOOD'}
    ]
}



function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header logo={headerDate.logo}/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={"/profile"} element={<Profile profilePage={profilePage}/>}/>
                        <Route path={"/dialogs/*"} element={<Dialogs dialogsPage={dialogsPage} />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
