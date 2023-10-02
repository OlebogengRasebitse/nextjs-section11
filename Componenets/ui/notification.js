import ReactDOM from 'react-dom';
import classes from './notification.module.css';

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  // Ensure that the target container element exists
  const targetContainer = document.getElementById('notifications');

  // Check if the target container element exists before creating the portal
  if (targetContainer) {
    return ReactDOM.createPortal(
      <div className={cssClasses}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>,
      targetContainer
    );
  } else {
    // Handle the case where the target container element is not found
    console.error("Target container 'notifications' not found in the DOM.");
    return null; // or return a fallback UI
  }
}

export default Notification;
