import { Fragment } from "react";
import "./App.scss";
import Header from "./components/Header";
import Characters from "./components/Characters";
import './main.scss';
import './components/Header.css';

const App = () => {
    return (
        <Fragment>
            <Header
            title = "Rick and Morty API"
            />
            <Characters />
        </Fragment>
    );
};
export default App;
