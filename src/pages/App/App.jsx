import "./App.css";
import PayementForm from "../../components/PayementForm/PayementForm";

const App = () => {
    return (
        <div className="body">
            <header role="header">
                <img src="/src/assets/images/bg-main-mobile.png" alt="Header background image" aria-label="Header background image" />
            </header>
            <main role="main">
                <PayementForm/>
            </main>
        </div>
    );
}

export default App;