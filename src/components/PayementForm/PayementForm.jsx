import { useState } from "react";
import PropTypes from 'prop-types';
import "./PayementForm.css";

const PayementForm = ({setConfirm}) => {
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
        const cardname = isBlank(e.target.cardname.value);
        const cardnumber = isCardNumberValidInput(e.target.cardnumber.value);
        const cardmonth = isCardMonthValidInput(e.target.cardmonth.value);
        const cardyear = isCardYearValidInput(e.target.cardyear.value);
        const cardcvc = isCardCVCValidInput(e.target.cardcvc.value);
        setError("cardname", cardname);
        setError("cardnumber", cardnumber);
        setError("cardmonth", cardmonth);
        setError("cardyear", cardyear);
        setError("cardcvc", cardcvc);
        if (cardname === "" && cardnumber === "" && cardmonth === "" && cardyear === "" && cardcvc === "") setConfirm(true);
    }

    return (
        <form method="get" id="payement-form" role="form" onSubmit={submitVerifications} aria-label="payement form" noValidate>
            <fieldset className="inputs">
                <div className="card-name-number">
                    <div className="card-name-g">
                        <label htmlFor="card-name">Cardholder Name</label>
                        <input type="text" name="cardname" id="card-name" style={{ border: errors["cardname"].length !== 0 ? "1px solid hsl(0, 100%, 66%)": "1px solid hsl(270, 3%, 87%)"}} placeholder="e.g. Jane Appleseed" required aria-label="Enter your credit card name" aria-selected/>
                        { errors["cardname"].length !== 0 ? <span className="error">{errors["cardname"]}</span> : null }
                    </div>
                    <div className="card-number-g">
                        <label htmlFor="card-number">Card Number</label>
                        <input type="text" name="cardnumber" id="card-number" style={{ border: errors["cardnumber"].length !== 0 ? "1px solid hsl(0, 100%, 66%)": "1px solid hsl(270, 3%, 87%)"}} placeholder="e.g. 1234 5678 9123 0000" minLength={16} maxLength={16} required aria-label="Enter your card credit number" aria-selected/>
                        { errors["cardnumber"].length !== 0 ? <span className="error">{errors["cardnumber"]}</span> : null }
                    </div>
                </div>
                <div className="card-date-cvc">
                    <div className="card-date">
                        <label htmlFor="card-month">Exp. Date (MM/YY)</label>
                        <div className="card-date-inputs">
                            <input type="month" name="cardmonth" id="card-month" style={{ border: errors["cardmonth"].length !== 0 ? "1px solid hsl(0, 100%, 66%)": "1px solid hsl(270, 3%, 87%)"}} placeholder="MM" min={1} max={12} maxLength={2} required aria-label="Enter month of your credit card" aria-selected/>
                            <input type="month" name="cardyear" id="card-year" style={{ border: errors["cardyear"].length !== 0 ? "1px solid hsl(0, 100%, 66%)": "1px solid hsl(270, 3%, 87%)"}} placeholder="YY" min={1} maxLength={2} required aria-label="Enter year of your credit card" aria-selected/>
                        </div>
                        { errors["cardmonth"].length !== 0 ? <span className="error">{errors["cardmonth"]}</span> : null }
                        { errors["cardyear"].length !== 0 ? <span className="error">{errors["cardyear"]}</span> : null }
                    </div>
                    
                    <div className="card-cvc">
                        <label htmlFor="card-cvc">CVC</label>
                        <input type="text" name="cardcvc" id="card-cvc" style={{ border: errors["cardcvc"].length !== 0 ? "1px solid hsl(0, 100%, 66%)": "1px solid hsl(270, 3%, 87%)"}} placeholder="e.g. 123" min={0} max={999} maxLength={3} required aria-label="Enter CVC of your credit card" aria-selected/>
                        { errors["cardcvc"].length !== 0 ? <span className="error">{errors["cardcvc"]}</span> : null }
                    </div>
                </div>
            </fieldset>

            <input className="submit-button" type="submit" value="Confirm" aria-label="Submit button" aria-selected/>
        </form>
    );
}

export default PayementForm;

PayementForm.propTypes = {
  setConfirm: PropTypes.any.isRequired
}