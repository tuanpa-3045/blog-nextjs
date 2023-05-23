import { Provider } from 'react-redux';
import axios from 'axios';
import { wrapper } from '../stores';
import '../styles/globals.css';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_BE_URL;

function MyApp({ Component, ...rest }) {
  const { props, store } = wrapper.useWrappedStore(rest);

  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
