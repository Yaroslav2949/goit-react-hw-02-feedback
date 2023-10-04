import PropTypes from 'prop-types';
import css from  './FeedbackContainer.module.css'

export const FeedBackContainer =({children})=>{
return(
  <div className={css.container}>{children} </div>

)
}



FeedBackContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  