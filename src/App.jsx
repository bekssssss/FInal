import Main from "./pages/Main/Main.jsx";
import Header from "./components/header/Header.jsx";
import UpFooter from "./components/footer/upFooter/UpFooter.jsx";
import DownFooter from "./components/footer/downFooter/DownFooter.jsx";


const App = () => {
    return (
            <div>
                <Header/>
                <Main/>
                {/*-весь автопарк (button)*/}
                {/*-топ 10 машин*/}
                {/*-отзывы*/}
                <UpFooter/>
                <DownFooter/>
            </div>
    );
};

export default App;