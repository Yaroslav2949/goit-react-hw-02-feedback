import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.StatList}>
      <li className={css.ListItem}>Good:{good} </li>
      <li className={css.ListItem}>Neutral:{neutral} </li>
      <li className={css.ListItem}>Bad:{bad} </li>
      <li className={css.ListItem}>Total:{total} </li>
      <li className={css.ListItem}>Positive feedback :{positivePercentage} %</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
