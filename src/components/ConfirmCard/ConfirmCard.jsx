import "./ConfirmCard.css";
import PropTypes from 'prop-types';

const ConfirmCard = ({ setConfirm }) => {
    return (
        <div className="confirm-card">
            <img src="/src/assets/images/icon-complete.svg" alt="icon completed" aria-label="icon completed" />
            <section className="titles">
                <h1>THANK YOU!</h1>
                <h2>We've added your card details</h2>
            </section>
            <input type="submit" value="Continue" className="submit-button" aria-label="continue" aria-selected onClick={() => {setConfirm(false)}}/>
        </div>
        
    );
}

ConfirmCard.propTypes = {
    setConfirm: PropTypes.any.isRequired
  }

export default ConfirmCard;