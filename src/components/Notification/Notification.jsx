import PropTypes from 'prop-types';
import css from './Notification.module.css'
export const Notification = ({message})=>{
    return <message className={css.m}>{message}</message>
     
}
Notification.propTypes = {
    message: PropTypes.string.isRequired,
}