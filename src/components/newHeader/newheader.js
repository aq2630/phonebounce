/*eslint-disable*/
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Logo from '../../assets/images/header/Logo.png'
import playStore from '../../assets/images/header/play-store.png'
import appStore from '../../assets/images/header/app-store.png';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import classNames from 'classnames'
import CloseDrawer from '@material-ui/icons/Clear';
import MenuLinks from './menulinks'
import { IsMobile  } from "react-device-detect";
import { Menu } from '@material-ui/icons';
import {
    Box,
    AppBar,
    Toolbar,
    Hidden,
    Dialog,
    Slide,
    Drawer,
    Typography,
    IconButton,
    Button,
    useScrollTrigger 

} from '@material-ui/core'

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
        display: 'flex',
        justifyContent: 'space-around',
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
    logo: {
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
      mobileStoresLogo: {
        width: '100px',
        height: '100%',
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
      menu: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: theme.palette.common.white,
      },
      menuIcon: {
        color: theme.palette.common.white,
      },
      drawerPaper: {
        border: 'none',
        transitionProperty: 'top, bottom, width',
        transitionDuration: '.2s, .2s, .35s',
        transitionTimingFunction: 'linear, linear, ease',
        backgroundColor:"#15212a",
        color:'#808080',
        width: '100%',
        display: 'block',
        height: '100%',
        position:'fixed',
        top:0,
        bottom: 0,
        background: theme.palette.common.bgPaper,
        '& .makeStyles-menulink-32' : {
          color:'#808080 !important',
          fontSize:'22px',
          marginRight:'0px'
        }
      },
      closeicon:{
        color:'#fdd700'
      }

}));

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,     
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const NewHeader = () => {
  const [open, setOpen] = useState(false)
    const classes = useStyles();
    const trigger = useScrollTrigger({
      disableHysteresis: true,
    });

const handleDrawer = () => {
  setOpen(!open)
}


    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes.fixed]: trigger,
      });

    const brandComponent = (
        <Box className={classes.logo}>
          <Link to="/">
            <img src={Logo} alt="the logo" />
          </Link>
        </Box>
      );

      const mobileStore = (
        <Box display="flex" gridGap="10px">
         
          <Link
            to='https://apps.apple.com/us/app/phonebounce/id1468937598'
            target="apple"
          >
            <img
              src={appStore}
              className={classes.mobileStoresLogo}
              alt="apple app link"
            />
          </Link>
          <Link
            to='https://play.google.com/store/apps/details?id=com.phonebounce'
            target="android"
          >
            <img
              src={playStore}
              className={classes.mobileStoresLogo}
              alt="android app link"
            />
          </Link>
        </Box>
      );
   

    return (
        <div> 
            <AppBar className={appBarClasses}>
                <Toolbar className={classes.toolbar}>
               {brandComponent}
               {mobileStore}            
                   <Hidden smDown implementation="css">
                   <MenuLinks />
                   </Hidden>

                   <Hidden mdUp>
                        <div className={classes.menu} onClick={handleDrawer}>
                      <IconButton aria-label="open drawer" className={classes.menuIcon}>

                        <Menu style={{fontSize:'40px'}}/>
                      </IconButton>
                    </div> 

                    </Hidden>
                </Toolbar>

                <Dialog
          fullScreen
          open={open}
          onClose={handleDrawer}
          TransitionComponent={Transition}
        >
              <Box className={classes.drawerPaper}>
                <Box display="flex" justifyContent="space-between" my={4} mx={3}>
                  <Box>{brandComponent}</Box>
                  <div className={classes.menu} onClick={handleDrawer}>
                    <CloseDrawer style={{fontSize:'40px'}} className={classes.closeicon}/>
                  </div>
                </Box>
                <Box>{MenuLinks}</Box>
              </Box>
            </Dialog>
            </AppBar>        
                
                    
           
        </div>

    )


}

export default NewHeader;
