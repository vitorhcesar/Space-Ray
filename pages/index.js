import Background from '@/src/components/Canvas/Background/background';
import Header from '@/src/components/Header/header';
import MainContent from '@/src/components/Main/main';


const MyApp = () => {
    return (
        <div id='app'>
            <Background />
            <Header />
            <MainContent />
        </div>
    );
};

export default MyApp;