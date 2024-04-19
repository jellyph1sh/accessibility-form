import { useState } from "react";
import "./App.css";

const App = () => {
    const [errors, setErrors] = useState({
        "cardname": "",
        "cardnumber": "",
        "cardmonth": "",
        "cardyear": "",
        "cardcvc": ""
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

    const isCardNumberValidInput = (value) => {
      let error = isBlank(value);
      if (error.length !== 0) return error;
      error = isOnlyDigits(value);
      if (error.length !== 0) return error;
      if (value.length < 16 || value.length > 16) {
        error = "Wrong format, need 16 numbers"
      }
      return error;
    }

    const isCardMonthValidInput = (value) => {
      let error = isBlank(value);
      if (error.length !== 0) return error;
      error = isOnlyDigits(value);
      if (error.length !== 0) return error;
      if (value.length < 2 || value.length > 2) {
        error = "Wrong format, need 2 numbers"
      }
      if (error.length !== 0) return error;
      if (value > 12 || value < 1) {
        error = "Wrong format, need to be between 1 and 12"
      }
      return error;
    }

    const isCardYearValidInput = (value) => {
      let error = isBlank(value);
      if (error.length !== 0) return error;
      error = isOnlyDigits(value);
      if (error.length !== 0) return error;
      if (value.length < 2 || value.length > 2) {
        error = "Wrong format, need 2 numbers"
      }
      if (error.length !== 0) return error;
      if (value < 0 || value > 99) {
        error = "Wrong format, need to be between 0 and 99"
      }
      return error;
    }

    const isCardCVCValidInput = (value) => {
      let error = isBlank(value);
      if (error.length !== 0) return error;
      error = isOnlyDigits(value);
      if (error.length !== 0) return error;
      if (value.length < 3 || value.length > 3) {
        error = "Wrong format, need 3 numbers"
      }
      if (error.length !== 0) return error;
      if (value < 0 || value > 999) {
        error = "Wrong format, need to be between 0 and 999"
      }
      return error;
    }

    const submitVerifications = (e) => {
        e.preventDefault();
        setError("cardname", isBlank(e.target.cardname.value));
        setError("cardnumber", isCardNumberValidInput(e.target.cardnumber.value));
        setError("cardmonth", isCardMonthValidInput(e.target.cardmonth.value));
        setError("cardyear", isCardYearValidInput(e.target.cardyear.value));
        setError("cardcvc", isCardCVCValidInput(e.target.cardcvc.value));
    }

    return (
        <form method="get" id="payement-form" role="form" onSubmit={submitVerifications} noValidate>
            <label htmlFor="card-name">Cardholder Name</label>
            <input type="text" name="cardname" id="card-name" placeholder="e.g. Jane Appleseed" required/>
            { errors["cardname"].length !== 0 ? <span className="error">{errors["cardname"]}</span> : null }

            <label htmlFor="card-number">Card Number</label>
            <input type="text" name="cardnumber" id="card-number" placeholder="e.g. 1234 5678 9123 0000" minLength={16} maxLength={16} required/>
            { errors["cardnumber"].length !== 0 ? <span className="error">{errors["cardnumber"]}</span> : null }

            <div className="card-date-cvc">
                <div className="card-date">
                    <label htmlFor="card-month">Exp. Date (MM/YY)</label>
                    <div className="card-date-inputs">
                        <div className="card-month">
                          <input type="month" name="cardmonth" id="card-month" placeholder="MM" min={1} max={12} maxLength={2} required/>
                          { errors["cardmonth"].length !== 0 ? <span className="error">{errors["cardmonth"]}</span> : null }
                        </div>
                        <div className="card-year">
                          <input type="month" name="cardyear" id="card-year" placeholder="YY" min={1} maxLength={2} required/>
                          { errors["cardyear"].length !== 0 ? <span className="error">{errors["cardyear"]}</span> : null }
                        </div>
                    </div>
                </div>
                
                <div className="card-cvc">
                    <label htmlFor="card-cvc">CVC</label>
                    <input type="text" name="cardcvc" id="card-cvc" placeholder="e.g. 123" min={0} max={999} maxLength={3} required/>
                    { errors["cardcvc"].length !== 0 ? <span className="error">{errors["cardcvc"]}</span> : null }
                </div>
            </div>

            <input type="submit" value="Confirm"/>
        </form>
    );
}

export default App;