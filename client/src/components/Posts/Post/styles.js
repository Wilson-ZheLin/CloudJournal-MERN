import { makeStyles } from '@mui/styles';

export default makeStyles({
  cardHeader: {
    height: '25px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    margin: '0 0',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 15px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  like: {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
  },
  message: {
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
  },
  tags: {
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
  }
});

