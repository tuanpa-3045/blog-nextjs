import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header';
import Notification from '../Notification';
import { flashMessageSelector } from '../../stores/notificationSlice';

function Layout(props) {
  const dispatch = useDispatch();
  const { message, status, title } = useSelector(flashMessageSelector);

  const [isShowFlash, setIsShowFlash] = useState(status);

  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      {!!isShowFlash && (
        <Notification message={message} status={status} title={title} />
      )}
    </Fragment>
  );
}

export default Layout;
