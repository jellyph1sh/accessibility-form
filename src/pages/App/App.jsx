import { useState } from "react";
import "./App.css";

const App = () => {
    const [errors, setErrors] = useState({
        "name": "",
        "number": ""
    });

    const setError = (name, value) => {
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: value
        }));
    }

    const isBlank = (value) => {
        if (value.length !== 0) return "";
        return "Can't be blank";
    }

    const isOnlyDigits = (value) => {
        if (!isNaN(value)) return "";
        return "Wrong format, numbers only";
    }

    const submitVerifications = (e) => {
        e.preventDefault();
        setError("name", isBlank(e.target.name.value));
        setError("number", isOnlyDigits(e.target.number.value));
        setError("number", isBlank(e.target.number.value));
    }

    return (
        <form method="get" id="payement-form" role="form" onSubmit={submitVerifications}>
            <label htmlFor="card-name">Cardholder Name</label>
            <input type="text" name="name" id="card-name" placeholder="e.g. Jane Appleseed"/>
            { errors["name"].length !== 0 ? <span className="error">{errors["name"]}</span> : null }

            <label htmlFor="card-number">Card Number</label>
            <input type="text" name="number" id="card-number" placeholder="e.g. 1234 5678 9123 0000"/>
            { errors["number"].length !== 0 ? <span className="error">{errors["number"]}</span> : null }

            <input type="submit" value="Confirm"/>
        </form>
    );
}

export default App;

/*
 return (
        <form id="payement-form" role="form">
            <label htmlFor="card-name">Cardholder Name</label>
            <input type="text" name="name" id="card-name" placeholder="e.g. Jane Appleseed" required/>
            <span className="error"></span>

            <label htmlFor="card-number">Card Number</label>
            <input type="number" name="number" id="card-number" placeholder="e.g. 1234 5678 9123 0000" required/>
            <span className="error"></span>
            
            <div className="card-date-cvc">
                <div className="card-date">
                    <label htmlFor="card-month">Exp. Date (MM/YY)</label>
                    <div className="card-date-inputs">
                        <input type="month" name="month" id="card-month" placeholder="MM" required/>
                        <input type="month" name="year" id="card-year" placeholder="YY" required/>
                    </div>
                    <span className="error"></span>
                </div>
                
                <div className="card-cvc">
                    <label htmlFor="card-cvc">CVC</label>
                    <input type="number" name="cvc" id="card-cvc" placeholder="e.g. 123" required/>
                    <span className="error"></span>
                </div>
            </div>
            
            <input type="submit" value="Confirm" />
        </form>
    );
*/