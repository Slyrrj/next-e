import { useEffect } from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //supprimer css sur le server
    const jssStyles = document.querySelector('#jss-server-side');
    //si jssStyles existe
    if (jssStyles) {
      //appellerle parent et supprimer son enfant
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StoreProvider>
      {' '}
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
