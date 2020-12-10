/*eslint-disable*/
import React from 'react';
/*eslint-disable*/
import {Link} from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from 'classnames';
import Logo from '../../assets/images/header/Logo.png'
import playStore from '../../assets/images/header/play-store.png'
import appStore from '../../assets/images/header/app-store.png';
// nodejs library to set properties for components
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Dialog,
  Slide,
  Box,
  useScrollTrigger,
} from '@material-ui/core';
// @material-ui/icons
import Menu from '@material-ui/icons/Menu';
// core components
import CancelIcon from '@material-ui/icons/Clear';
import HeaderLinks from './HeaderLinks';

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '10px',
    border: '0',
    borderRadius: '3px',
    paddingBottom: '0 !important',
    width: '100%',
    boxShadow: 'none',
    transition: 'all 150ms ease 0s',
    justifyContent: 'flex-start',
    position: 'absolute',
    zIndex: '9',
    background: 'transparent',
    '& .MuiToolbar-root': {},
  },
  toolbar: {
    display: 'flex',justifyContent: 'space-around',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    alignItems: 'center  ',
  },
  fixed: {
    height: 'content-fit',
    transition:' height 0.5s',
    boxShadow:'0 2px 8px 0 rgba(62, 62, 79, .23)',
    position: 'fixed',
    zIndex: '1100',
    background: 'linear-gradient(89deg,#a5215e 3%,#ee5586 98%) !important'
  },
  appLink: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    display: "inline-block",
    transition: "0.5s",
    float: "right",

  },
  brand: {
    display: 'flex',
    '& a': {
      textDecoration: 'none',
    },
    '& img': {
      width: '190px',

      [theme.breakpoints.down('md')]: {
        transition: '0.3s',
        width: '150px',
      },
      [theme.breakpoints.down('sm')]: {
        transition: '0.3s',
        width: '120px',
      },
    },
  },
  appStoreLogo: {
    width: '100px',
    // height: '100%',
    objectFit:'contain',
    [theme.breakpoints.down('md')]: {
      transition: '0.3s',
      width: '87px',
    },
    [theme.breakpoints.down('sm')]: {
      transition: '0.3s',
      width: '60px',
    },
  },
  brandName: {
    marginLeft: '10px',
    fontSize: '20px',
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  appResponsive: {
    position: 'relative',
    '& .MuiList-root ': {
      overflow: 'hidden',
    },
  },
  drawerPaper: {
    border: 'none',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    width: '100%',
    display: 'block',
    height: '100%',
    position:'fixed',
    top:0,
    bottom: 0,
    background: theme.palette.common.bgPaper,
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: theme.palette.common.white,
  },
  menuIcon: {
    color: theme.palette.common.white,
  },
  toStoreSearch: {
    flex: 1,
    textAlign: 'center',
    maxWidth: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    '& a': {
      fontSize: '20px',
      display: 'flex',
      textDecoration: 'none',
      color: theme.palette.grey[500],
    },
  },
  shop: {
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  },
  cancelIcon:{
    color:'#fdd700'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  
  const trigger = useScrollTrigger();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.fixed]: trigger,
  });

  const brandComponent = (
    <Box className={classes.brand}>
      <Link to="/">
        <img src={Logo} alt="the logo" />
      </Link>
    </Box>
  );

  const mobileStore = (
    <Box display="flex" gridGap="10px">
      <Link
        className={classes.appLink}
        to="https://apps.apple.com/us/app/phonebounce/id1468937598"
        target="apple"
      >
        <img
          src={appStore}
          className={classes.appStoreLogo}
          alt="apple app link"
        />
      </Link>
      <Link
        className={classes.appLink}
        to="../../assets/images/meeting-room/formLogo.png"
        target="android"
      >
        <img
          src={playStore}
          className={classes.appStoreLogo}
          alt="android app link"
        />
      </Link>
      
    </Box>
  );

  const rightLinks = <HeaderLinks />;

  return (
    <React.Fragment>
      <AppBar className={appBarClasses}>
        <Toolbar className={classNames(classes.toolbar)}>
          {brandComponent}
          {mobileStore}
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <div className={classes.menu} onClick={handleDrawerToggle}>
              <IconButton aria-label="open drawer" className={classes.menuIcon}>

                <Menu style={{fontSize:'40px'}}/>
              </IconButton>
            </div>
          </Hidden>
        </Toolbar>
        <Dialog
          fullScreen
          open={mobileOpen}
          onClose={handleDrawerToggle}
          TransitionComponent={Transition}
        >
          <Box className={classes.drawerPaper}>
            <Box display="flex" justifyContent="space-between" my={4} mx={3}>
              <Box>{brandComponent}</Box>
              <div className={classes.menu} onClick={handleDrawerToggle}>
                <CancelIcon style={{fontSize:'40px'}} className={classes.cancelIcon}/>
              </div>
            </Box>
            <Box>{rightLinks}</Box>
          </Box>
        </Dialog>
      </AppBar>
    </React.Fragment>
  );
}
