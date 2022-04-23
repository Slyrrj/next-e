import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#702632',
    '& a': { color: '#fff', marginLeft: 10 },
  },
  main: {
    maxWidth: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
});
export default useStyles;
