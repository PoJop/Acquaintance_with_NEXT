
import MainContainer  from './components/MainContainer'
import style  from './styles/index.module.scss'

const Index = () => {
    return (
        <MainContainer>
        <main className={style.main}>
            <h1>Главная страница</h1>
            <p>Это моё первое знакомство с NEXT.JS</p>
            <div className={style.link_wrapper}>
                <a target="_blank" href="https://github.com/PoJop">github</a>
                <a target="_blank" href="https://www.linkedin.com/in/oleg-kostetskyi-5169841b0/">linkedin</a>
            </div>
        </main>
        </MainContainer>
    );
};

export default Index;