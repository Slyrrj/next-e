import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../utils/styles';
export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next-e</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>e-mitee</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer>
        <Typography className={classes.footer}>
          All rights reserved. Next-e.
        </Typography>
      </footer>
    </div>
  );
}
