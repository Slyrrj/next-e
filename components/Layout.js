import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from '@material-ui/core';
import useStyles from '../utils/styles';
export default function Layout({ title, description, children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#912F40',
      },
      secondary: {
        main: '#208080',
      },
    },
  });

  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Krea-TiaDesig` : 'Krea-TiaDesig'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>
                  Krea-TiaDesign
                </Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/panier" passHref>
                <Link>Panier</Link>
              </NextLink>
              <NextLink href="/connexion" passHref>
                <Link>Se connecter</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer>
          <Typography className={classes.footer}>
            Tous droits réservés. Krea-TiaDesign.
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
