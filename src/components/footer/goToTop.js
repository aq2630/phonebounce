/*eslint-disable*/
import React from 'react';
/*eslint-disable*/
import {makeStyles} from '@material-ui/core/styles';
import { useScrollTrigger} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
const useStyles = makeStyles((theme) => ({
  button: {
    visibility: 'visible',
    opacity: 1,
    zIndex: 99,
    backgroundColor: theme.palette.secondary.main,
    height: '42px !important',
    width: '42px !important',
    boxShadow: '0 2px 8px 0 rgba(62, 62, 79, 0.15)',
    position: 'fixed',
    overflow: 'hidden',
    bottom: '80px',
    right: '40px',
    borderRadius: '15px',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity .3s 0s, visibility 0s .3s',
    upArrow: {
      fontSize: '31px',
      color: '#fff',
      width: '100%',
      height: '100%',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '&:hover': {
      transition: '0.5s',
      backgroundColor: '#f50057',
      cursor: 'pointer',
    },
  },
  upArrow: {
    fontSize: '31px',
    color: '#fff',
    width: '100%',
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
}));

const GoToTop = (props) => {
  const classes = useStyles();

  const trigger = useScrollTrigger();

  const handleClick = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })

  };

  return (
    <Zoom in={trigger}>
      <div className={classes.button} onClick={handleClick} role="presentation">
        {/* <i className="fas fa-angle-up"></i>{' '} */}
        <KeyboardArrowUpIcon className={classes.upArrow} />
      </div>
    </Zoom>
  );
};

export default GoToTop;
