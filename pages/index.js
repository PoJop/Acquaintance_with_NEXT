
import Head  from 'next/Head'
import MainContainer  from './components/MainContainer'

const Index = () => {
    return (
        <MainContainer>
        <Head>
            <link rel="stylesheet" href="../index.module.css" />
        </Head>
        <div>
            
            <h1>Главная страница</h1>
        </div>
        </MainContainer>
    );
};

export default Index;