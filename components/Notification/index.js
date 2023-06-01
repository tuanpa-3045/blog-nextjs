import { flashMessageStatus } from '../../utils/constants';
import classes from './notification.module.css';

function Notification(props) {
  const { status, title, message } = props;

  console.log(props);
  let statusClasses = '';
  if (status === flashMessageStatus.SUCCESS) {
    statusClasses = classes.success;
  }
  if (status === flashMessageStatus.ERROR) {
    statusClasses = classes.error;
  }
  if (status === flashMessageStatus.PENDING) {
    statusClasses = classes.pending;
  }
  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
