import Link  from 'next/link'

const MainContainer = ({children}) => {
    return(
        <>
        <nav className='navBar'>
            <Link href="/" >
                <a  >Главная</a>
            </Link>
            <Link href="/users">
                <a >Пользователи</a>
            </Link>
        </nav>
        <div>
            {children}
        </div>
        </>
    )
}

export default MainContainer;