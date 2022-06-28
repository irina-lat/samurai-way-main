import React from 'react';
import cl from './ProfileInfo.module.css'


function ProfileInfo() {
    return (
        <div className={cl.profileinfo}>
            <div className={cl.descriptionBlock}>
                <Avatar/>
                <Description/>
            </div>

        </div>
    );
}

function Avatar() {
    return (
        <div className={cl.avatar}>
            <div className={cl.photo}>
                <a href="#"><img src="https://coolsen.ru/wp-content/uploads/2021/06/91_2.jpg" alt="avatar"/></a>
            </div>
            <div className={cl.avatarname} >
                <div>
                    <a>Lana Force</a>
                </div>
                <time>10:20 02.05.2022</time>
            </div>
        </div>

    )
}

function Description() {
    return (
        <div className={cl.description} >
            <p>Леса России — территории России, покрытые лесной растительностью. Площадь лесов России составляет около
                809 млн га (8,09 млн км²), или около 20 % от всех лесов мира (по площади лесов Россия занимает первое
                место в мире). Леса покрывают 46,6 % территории России и оказывают значительное влияние на формирование
                её климата. По данным всемирной книги фактов ЦРУ по состоянию на 2018 год леса покрывают 49,4 %
                территории России и поэтому показателю среди всех государств и территорий мира Россия занимает 51 место
                в мире. Большинство лесов страны занято хвойными породами деревьев. Эксплуатационные леса
                занимают в России площадь около 598 млн га. По Лесному кодексу имеются также леса, не входящие в
                лесные земли. Общая площадь лесов в России, включая земли лесного фонда, особо охраняемых территорий,
                обороны, населенных пунктов и иных категорий, составляет 1 187,6 млн га.
            </p>
            <div className={cl.image}>
                <img src='https://phonoteka.org/uploads/posts/2021-04/1618395532_41-phonoteka_org-p-anime-fon-les-48.jpg'></img>
            </div>
        </div>
    )
}


export default ProfileInfo;
