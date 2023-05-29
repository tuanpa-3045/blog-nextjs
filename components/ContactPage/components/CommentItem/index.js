import moment from 'moment';
import Image from 'next/image';

import classes from '../../contact.module.css';

function CommentItem({ post }) {
  const { message, email, updated, name } = post;
  const imagePath = '/images/avatar.jpg';
  const time = updated ? moment(updated).format('DD/MM/YYYY HH:ss') : '-';
  return (
    <li className={classes.posts}>
      <div className={classes.avatar}>
        <Image src={imagePath} alt="avatar" width={50} height={50} />
      </div>
      <div className={classes.name}>
        <div className={classes.title}>
          <h3>{name} - <span className={classes.email}>{email}</span></h3>
          <p className={classes.time}>{time}</p>
        </div>
        <p className={classes.comment}>{message}</p>
      </div>
    </li>
  );
}

export default CommentItem;
