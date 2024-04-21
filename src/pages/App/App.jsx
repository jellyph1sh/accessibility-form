import "./App.css";
import PayementForm from "../../components/PayementForm/PayementForm";
import ConfirmCard from "../../components/ConfirmCard/ConfirmCard";
import { useState } from "react";

const App = () => {
    const [confirmed, setConfirm] = useState(false);

    return (
        <div className="body">
            <header role="header">
                
            </header>
            <main role="main">
                {confirmed ? 
                    <ConfirmCard setConfirm={setConfirm}/>
                :
                    <PayementForm setConfirm={setConfirm}/>
                }
            </main>
        </div>
    );
}

export default App;