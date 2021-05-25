import Link  from 'next/link'
import Nav from './nav'

const MainContainer = ({children}) => {
    return(
        <>
        <Nav />
        <div>
            {children}
        </div>
        </>
    )
}

export default MainContainer;