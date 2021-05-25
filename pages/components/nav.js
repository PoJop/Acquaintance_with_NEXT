import Router  from 'next/router'
import style  from '../styles/nav.module.scss'
const Nav = () => {
    return(
        <>
        <nav className={style.navBar}>
                <div className={style.link_wrapper}>
                    <button onClick={() => Router.push(`/`)} 
                    className={style.link_1}>Главная</button>
                </div>
                <div className={style.link_wrapper}>
                    <button onClick={() => Router.push(`/users`)} 
                    className={style.link_2}>Пользователи</button>
                </div>
        </nav>
        </>
    )
}

export default Nav;