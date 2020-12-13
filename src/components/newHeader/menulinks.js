import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import classNames from 'classnames';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import menuMobileLink from '../../assets/images/meeting-room/4_Mobile-05.png'
import menuLocalImg from '../../assets/images/meeting-room/5_Local-05.png'
import menuNationalImg from '../../assets/images/meeting-room/6_National-05.png'
import menuTollImg from '../../assets/images/meeting-room/7_Toll_Free-05.png'
import {
    List,
    ListItem,
    ListItemText ,
    Button,
    Chip,
    Box,
    // Link,
    Grid,
    Typography,
    Divider,
    useScrollTrigger,
    
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    list: {
        margin: 0,
        paddingLeft: '0',
        listStyle: 'none',
        paddingTop: '0',
        paddingBottom: '0',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
          paddingBottom: '15px',
          paddingTop: '15px',
          flexWrap: 'wrap',
        },
      },
      listItem: {
        position: 'relative',
        margin: '0 10px',
        display: 'flex',
        justifyContent: 'center',
        width: 'auto',
        padding: '0',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          padding: '15px 0',
          '&:after': {
            width: 'calc(100% - 30px)',
            content: '',
            display: 'block',
            height: '1px',
            marginLeft: '15px',
            backgroundColor: '#e5e5e5',
          },
        },
      },
      meetingsbtn : {
        borderRadius:"20px",
        fontSize:'12px',
        color:'white',
        textTransform:'capitalize',
        textDecoration:'none !important',
        paddingLeft:'12px',
        paddingRight:'12px',
        backgroundColor:'#ee5586 !important',
        '& a': {
          textDecoration:'none'
        }
      },
      meetingsbtnontrigger :{
        borderRadius:"20px",
        fontSize:'12px',
        color:'white',
        textTransform:'capitalize',
        paddingLeft:'12px',
        paddingRight:'12px',       
        backgroundColor:'#3a6173 !important'
      },
      menulink: {
          marginRight:'20px',
          color:'white',
          textDecoration:'none',
          '&:hover' : {
            color:"#f50057",
            transition:'0.3s',
            textDecoration:'none',
          }
      },

      // dropdown menu
      dropdownContainer: {
        opacity: 0,
        visibility: 'hidden',
        position: 'absolute',
        zIndex: '9',
        padding: '20px 30px',
        borderRadius: '12px',
        backgroundColor: '#fff',
        width: 'auto',
        top: '65px',
        '& li': {
          padding: '0 !important',
        },
        '& .MuiDivider-root': {
          backgroundColor: 'rgba(0,0,0,.1)',
          width: '150px',
          marginTop: '1rem',
        },
        [theme.breakpoints.down('sm')]: {
          opacity: '0 !important',
          visibility: 'hidden important',
          display: 'none !important',
        },
      },
      numberDropdown: {
        width: '800px',
        '&:hover': {
          opacity: '1 !important',
          visibility: 'visible !important',
        },
      },
      featuresDropdown: {
        width: '230px',
        padding: "20px 10px !important",
        '& li':{
          padding:'5px 0 !important'
        }
      },
    
      numberVector: {
        height: '0',
        '&:hover': {
          '& .numberDropdown': {
            opacity: '1 !important',
            visibility: 'visible !important',
          },
          '& .numberDropdown': {
            height: '70px',
          },
        },
      },
      platformVector: {
        height: '0',
        '&:hover': {
          '& .platformDropdown': {
            opacity: '1 !important',
            visibility: 'visible !important',
          },
          '& .platformDropdown': {
            height: '70px',
          },
        },
      },
      featuresVector: {
        height: '0',
      },
      vector: {
        bottom: 0,
        position: 'absolute',
        left: '30%',
        background: '#fff',
        top: '25px',
        width: '2px',
        transition: '0.3s',
        [theme.breakpoints.down('sm')]: {
          opacity: '0 !important',
          visibility: 'hidden important',
          display: 'none !important',
        },
      },
      vectorInner:{
        width: '100px',
        height: '40px',
        position: 'absolute',
        transform: "translateX(-31px)",
        '&:hover': {
          '& .numberDropdown': {
            opacity: '1 !important',
            visibility: 'visible !important',
          },
          '& .numberDropdown': {
            height: '70px',
          },
        },
      },
      platformDropdown: {
        width: '320px',
        padding: "20px 20px !important",
        '& li':{
          padding:'5px 0 !important'
        }
      },
    
      numberLink: {
        '&:hover': {
          '& .makeStyles-numberDropdown-35,& .jss33': {
            opacity: '1 !important',
            visibility: 'visible !important',
          },
          '& .makeStyles-numberVector-37': {
            height: '70px',
          },
        },
      },
      featuresLink: {
        '&:hover': {
          '& .makeStyles-featuresDropdown-36, & .jss34': {
            opacity: '1 !important',
            visibility: 'visible !important',
          },
          '& .makeStyles-featuresVector-39': {
            height: '70px',
          },
        },
      },
      platformLink: {
        '&:hover': {
          '& .makeStyles-platformDropdown-42, & .jss40': {
            opacity: '1 !important',
            visibility: 'visible !important',
          },
          '& .makeStyles-platformVector-38': {
            height: '70px',
          },
        },
      },
    
      dropdownHeadTitle: {
        color: '#343a40 !important',
      },
      dropdownLink: {
        padding: 0,
        lineHeight: '34px',
        marginRight: ' 0px',
        color:"#808080",
        font: '15px Open Sans',
        '&:hover': {
          textDecoration:'none',
          color:'#f50057'
        }
      },
      dropdownImage: {
        height: '32px',
        width: '32px',
      },

      scrollActive:{
        '& a':{
          '&:hover':{
            transition:'0.3s',
            color:'#fff !important'
          }
        }
      },
      activeLink: {
        color: '#f50057',
        '& a': {
          fontWeight: '700',
          color: '#f50057',
        },
      },
      
}));




const featuresDropDown = (
    <Link to="" />
);




  const MenuLinks = () =>  {
      const classes = useStyles();
      const trigger = useScrollTrigger();

      const [dropdownLists, setDropdownLists] = React.useState({
        numbers: {
          numberLinksStep1: {
            headerImage: menuMobileLink,
            headTitle: 'Mobile',
            links: [
              {
                name: 'Great Britian',
                url: '#',
              },
              {
                name: 'Australia',
                url: '#',
              },
              {
                name: 'Belgium',
                url: '#',
              },
              {
                name: 'Indonesia',
                url: '#',
              },
              {
                name: 'Israel',
                url: '#',
              },
              {
                name: 'Kenya',
                url: '#',
              },
            ],
          },
          numberLinksStep2: {
            headerImage: menuLocalImg,
            headTitle: 'Local',
            links: [
              {
                name: 'Brazil',
                url: '#',
              },
              {
                name: 'Canada',
                url: '#',
              },
              {
                name: 'Chile',
                url: '#',
              },
              {
                name: 'Latvia',
                url: '#',
              },
              {
                name: 'Malta',
                url: '#',
              },
              {
                name: 'New Zealand',
                url: '#',
              },
            ],
          },
          numberLinksStep3: {
            headerImage: menuNationalImg,
            headTitle: 'National',
            links: [
              {
                name: 'Cyprus',
                url: '#',
              },
              {
                name: 'Denmark',
                url: '#',
              },
              {
                name: 'Dominican Republic',
                url: '#',
              },
              {
                name: 'Peru',
                url: '#',
              },
              {
                name: 'Philippines',
                url: '#',
              },
              {
                name: 'Poland',
                url: '#',
              },
            ],
          },
          numberLinksStep4: {
            headerImage: menuTollImg,
            headTitle: 'Toll Free',
            links: [
              {
                name: 'El Salvador',
                url: '#',
              },
              {
                name: 'Estonia',
                url: '#',
              },
              {
                name: 'Finland',
                url: '#',
              },
              {
                name: 'Puerto rico',
                url: '#',
              },
              {
                name: 'Sweden',
                url: '#',
              },
              {
                name: 'Switzerland',
                url: '#',
              },
              {
                name: 'United states',
                url: '#',
              },
            ],
          },
        },
      
        features: [
          {
            name: 'Call Forwarding',
            url: '/call-forwarding.html',
          },
          {
            name: 'Call Recording',
            url: '/call-recording.html',
          },
          {
            name: ' Call Blocking',
            url: '/call-blocking.html',
          },
          {
            name: 'Call Whispering',
            url: '/call-whisper.html',
          },
          {
            name: 'Conference Calling',
            url: '/conference-calling.html',
          },
          {
            name: 'Conference Calling',
            url: '/personalised-voicemail.html',
          },
          {
            name: ' Translation',
            url: '/translation.html',
          },
          {
            name: ' Web Integration',
            url: '/web-integration.html',
          },
        ],
        platform: [
          {
            name: 'Free video calls',
            url: '/free-video-calls.html',
          },
          {
            name: 'Buy multiple numbers',
            url: '/make-calls-and-messages.html',
          },
          {
            name: 'Make Calls and Messages',
            url: '/make-calls-and-messages.html',
          },
          {
            name: 'Host Meetings',
            url: '/host-meeting-anywhere.html',
          },
          {
            name: 'Review Calls and Messages',
            url: '/reviews-calls-and-messages.html',
          },
          {
            name: ' Your Business Card',
            url: '/your-business-card.html',
          },
        ],
      });

      const {features, numbers, platform} = dropdownLists;
      const {
        numberLinksStep1,
        numberLinksStep2,
        numberLinksStep3,
        numberLinksStep4,
      } = numbers;

      const location = useLocation();


    return (
            <List component="nav" className={classes.list} aria-label="secondary mailbox folders">
            <ListItem 
            // className={classes.listItem}
            className={classNames({
              [classes.listItem] : true,
              [classes.scrollActive]:trigger,
              [classes.activeLink]: '/' === location.pathname && !trigger  ,

            })}
             button>            
             <Link to='/' className={classes.menulink} >Home</Link>          
            </ListItem>
            <ListItem 
             className={classNames({
              [classes.listItem] : true,
              [classes.numberLink]: true,
              [classes.scrollActive]:trigger,
              [classes.activeLink]: '/numbers' === location.pathname && !trigger,

            })}
            button>            
             <Link to='/numbers' 
             className={classes.menulink}
             
             >Numers</Link>
             <Box
          component="span"
          className={classNames({
            [classes.numberVector]: true,
            [classes.vector]: true,
          })}
        >
          <Box component={'span'} className={classes.vectorInner} />
        </Box>
        <Grid
          container
          spacing={3}
          className={classNames({
            [classes.dropdownContainer]: true,
            [classes.numberDropdown]: true,
          })}
        >
          <Grid item sm={12} md={12} lg={6}>
            <Box display="flex" gridGap={'10px'} justifyContent="space-around">
              <Box>
                <Box display="flex" gridGap="12px" alignItems="center">
                  <img
                    className={classes.dropdownImage}
                    src={numberLinksStep1.headerImage}
                    alt="Mobile"
                  />
                  <Typography
                    variant="h6"
                    className={classes.dropdownHeadTitle}
                  >
                    {numberLinksStep1.headTitle}
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <List className={classes.dropdownList}>
                    {numberLinksStep1.links.map((link, index) => (
                      <ListItem
                        className={classes.dropdownListItem}
                        key={index}
                      >
                        <Link
                          href={link.url}
                          data-i18n=""
                          className={classes.dropdownLink}
                        >
                          {' '}
                          {link.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
              <Box>
                <Box display="flex" gridGap="12px" alignItems="center">
                  <img
                    className={classes.dropdownImage}
                    src={numberLinksStep2.headerImage}
                    alt="Mobile"
                  />
                  <Typography
                    variant="h6"
                    className={classes.dropdownHeadTitle}
                  >
                    {numberLinksStep2.headTitle}
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <List className={classes.dropdownList}>
                    {numberLinksStep2.links.map((link, index) => (
                      <ListItem
                        className={classes.dropdownListItem}
                        key={index}
                      >
                        <Link
                          href={link.url}
                          data-i18n=""
                          className={classes.dropdownLink}
                        >
                          {' '}
                          {link.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={12} lg={6}>
            <Box display="flex" gridGap={'10px'} justifyContent="space-around">
              <Box>
                <Box display="flex" gridGap="12px" alignItems="center">
                  <img
                    className={classes.dropdownImage}
                    src={numberLinksStep3.headerImage}
                    alt="Mobile"
                  />
                  <Typography
                    variant="h6"
                    className={classes.dropdownHeadTitle}
                  >
                    {numberLinksStep3.headTitle}
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <List className={classes.dropdownList}>
                    {numberLinksStep3.links.map((link, index) => (
                      <ListItem
                        className={classes.dropdownListItem}
                        key={index}
                      >
                        <Link
                          href={link.url}
                          data-i18n=""
                          className={classes.dropdownLink}
                        >
                          {' '}
                          {link.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
              <Box>
                <Box display="flex" gridGap="12px" alignItems="center">
                  <img
                    className={classes.dropdownImage}
                    src={numberLinksStep4.headerImage}
                    alt="Mobile"
                  />
                  <Typography
                    variant="h6"
                    className={classes.dropdownHeadTitle}
                  >
                    {numberLinksStep4.headTitle}
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <List className={classes.dropdownList}>
                    {numberLinksStep4.links.map((link, index) => (
                      <ListItem
                        className={classes.dropdownListItem}
                        key={index}
                      >
                        <Link
                          href={link.url}
                          data-i18n=""
                          className={classes.dropdownLink}
                        >
                          {' '}
                          {link.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>           
            </ListItem>
            <ListItem
             className={classNames({
              [classes.listItem] : true,
              [classes.featuresLink]: true,
              [classes.scrollActive]:trigger,
              [classes.activeLink]: '/features' === location.pathname && !trigger,

            })}
            button>
            <Link to='/features' className={classes.menulink} >Features</Link>
            <Box
          component="span"
          className={classNames({
            [classes.featuresVector]: true,
            [classes.vector]: true,
          })}
        >
          <Box component={'span'} className={classes.vectorInner} />
        </Box>
        <Grid
          container
          spacing={3}
          className={classNames({
            [classes.dropdownContainer]: true,
            [classes.featuresDropdown]: true,
          })}
        >
          <Grid item xs={12}>
            <Box display="flex" gridGap={'10px'}>
              <List className={classes.dropdownList}>
                {features.map((link, index) => (
                  <ListItem className={classes.dropdownListItem} key={index}>
                    <Link
                      href={link.url}
                      data-i18n=""
                      className={classes.dropdownLink}
                    >
                      {' '}
                      {link.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>

            </ListItem>
            <ListItem 
             className={classNames({
              [classes.listItem] : true,
              [classes.platformLink]: true,
              [classes.scrollActive]:trigger,
              [classes.activeLink]: '/platform' === location.pathname && !trigger,

            })}
            button>
            <Link to='/platform' className={classes.menulink} >Platform</Link> 
            <Box
          component="span"
          className={classNames({
            [classes.platformVector]: true,
            [classes.vector]: true,
          })}
        >
          <Box component={'span'} className={classes.vectorInner} />
        </Box>
        <Grid
          container
          spacing={3}
          className={classNames({
            [classes.dropdownContainer]: true,
            [classes.platformDropdown]: true,
          })}
        >
          <Grid item xs={12}>
            <Box display="flex" gridGap={'10px'}>
              <List className={classes.dropdownList}>
                {platform.map((link, index) => (
                  <ListItem className={classes.dropdownListItem} key={index}>
                    <Link
                      href={link.url}
                      data-i18n=""
                      className={classes.dropdownLink}
                    >
                      {' '}
                      {link.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>

            </ListItem>
            <ListItem 
            // className={classes.listItem}
            className={classNames({
              [classes.listItem] : true,
              [classes.scrollActive]:trigger,
              [classes.activeLink]: '/support' === location.pathname && !trigger,

            })}
            button>
            <Link to='/support' 
            className={classes.menulink}
            
            >Support</Link>  
            </ListItem>
            <ListItem className={classes.listItem} button>
              <Link to="/meeting-room" >
              <Button            
              className={trigger ? classes.meetingsbtnontrigger : classes.meetingsbtn}  
              variant="contained" 
              >
                Meetings
              </Button>

              </Link>
                {/* <Chip classes={classes.meetingsbtn}  color={trigger ? "primary.light" : "secondary"} label="Meetings" />            */}
            </ListItem>
           
        </List>
    )

  }
  export default withStyles(useStyles, { withTheme: true })(MenuLinks);