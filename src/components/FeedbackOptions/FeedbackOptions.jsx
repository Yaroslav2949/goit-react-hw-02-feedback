import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options,onLeaveFeedback}) => {
  return options.map(option => (
    <button type='button' className={css.button} key={option}  onClick={()=>{
      onLeaveFeedback(option)
    }}> {option} </button>
  ));
};
