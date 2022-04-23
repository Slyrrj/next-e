import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //supprimer css sur le server
    const jssStyles = document.querySelector('#jss-server-side');
    //si jssStryles existe
    if (jssStyles) {
      //appellerle parent et supprimer son enfant
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
