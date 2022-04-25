import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#702632',
    '& a': { color: '#fff', marginLeft: 10 },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },

  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  // btn: {
  //   backgroundColor: '#912F40',
  // },
  sectR: {
    marginTop: 40,
  },

  sectPrix: {
    marginTop: 70,
  },
});
export default useStyles;
