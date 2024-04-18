import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../pages/App/App";

const Ways = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Ways;