import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ click }) => {
  return (
    <div className={css.loadMOreWrapper}>
      <button type="button" className={css.button} onClick={click}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Button;
