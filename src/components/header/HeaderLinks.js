/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
import {useLocation} from 'react-router-dom';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {
  List,
  ListItem,
  Chip,
  Box,
  
  Grid,
  Typography,
  Divider,
  useScrollTrigger,
  
} from '@material-ui/core';
// core components

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
  link: {
    position: 'relative',
    zIndex: 9999,
    font: '15px Open Sans',
    textDecoration: 'none',
    position: 'relative',
    paddingRight: '20px',
    fontWeight: '400',
    letterSpacing: '-0.2px',
    borderRadius: '3px',
    lineHeight: '1.25rem',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    transition: '0.3s',
    color: theme.palette.common.white,
    '&:hover': {
      transition: '0.3s',
      textDecoration: 'none',
      cursor: 'pointer',
      color: theme.palette.secondary.main,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      color: '#808080',
      marginRight: 0,
      '&:hover': {
        transition: '0.3s',
        color: '#fdd700 !important',
      },
    },
  },
  chipWrapper: {
    '& .MuiChip-root': {
      [theme.breakpoints.down('sm')]: {
        padding: '10px 30px !important',
        borderRadius: '18px !important',
      },
    },
  },
  activeLink: {
    color: theme.palette.secondary.main,
    '& a': {
      fontWeight: '700',
      color: theme.palette.secondary.main,
    },
  },

  // DROPDOWN STYLES
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
      '& .makeStyles-numberDropdown-37': {
        opacity: '1 !important',
        visibility: 'visible !important',
      },
      '& .makeStyles-numberVector-39': {
        height: '70px',
      },
    },
  },
  platformVector: {
    height: '0',
    '&:hover': {
      '& .makeStyles-platformDropdown-44': {
        opacity: '1 !important',
        visibility: 'visible !important',
      },
      '& .makeStyles-platformVector-40': {
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
      '& .makeStyles-numberDropdown-37': {
        opacity: '1 !important',
        visibility: 'visible !important',
      },
      '& .makeStyles-numberVector-39': {
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
      '& .makeStyles-numberDropdown-37': {
        opacity: '1 !important',
        visibility: 'visible !important',
      },
      '& .makeStyles-numberVector-39': {
        height: '70px',
      },
    },
  },
  featuresLink: {
    '&:hover': {
      '& .makeStyles-featuresDropdown-38': {
        opacity: '1 !important',
        visibility: 'visible !important',
      },
      '& .makeStyles-featuresVector-41': {
        height: '70px',
      },
    },
  },
  platformLink: {
    '&:hover': {
      '& .makeStyles-platformDropdown-44': {
        opacity: '1 !important',
        visibility: 'visible !important',
      },
      '& .makeStyles-platformVector-40': {
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
    font: '15px Open Sans',
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
  }
}));

export default function HeaderLinks(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const [dropdownLists, setDropdownLists] = React.useState({
    numbers: {
      numberLinksStep1: {
        headerImage: 'assets/images/meeting-room/4_Mobile-05.png',
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
        headerImage: 'assets/images/meeting-room/5_Local-05.png',
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
        headerImage: 'assets/images/meeting-room/6_National-05.png',
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
        headerImage: 'assets/images/meeting-room/7_Toll_Free-05.png',
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

  const rightChip = (
    <Box className={classes.chipWrapper}>
      <Link to="/meeting-room" className={classes.link}>
        <Chip color={trigger ? 'primary': "secondary"} label="Meetings" />
      </Link>
    </Box>
  );

  const location = useLocation();
  const {features, numbers, platform} = dropdownLists;
  const {
    numberLinksStep1,
    numberLinksStep2,
    numberLinksStep3,
    numberLinksStep4,
  } = numbers;
  const renderRightMenu = (
    <List className={classes.list}>
      {/* {LinksList.map((link, index) => ( */}
      <ListItem
        className={classNames({
          [classes.listItem]: true,
          [classes.activeLink]: '/home' === location.pathname && !trigger  ,
          [classes.scrollActive]:trigger,
        })}
      >
        <Link to={'/'} className={classes.link}>
          Home
        </Link>
      </ListItem>
      <ListItem
        className={classNames({
          [classes.listItem]: true,
          [classes.numberLink]: true,
          [classes.scrollActive]:trigger,
          [classes.activeLink]: '/numbers' === location.pathname && !trigger ,
        })}
      >
        <Link to="/numbers" className={classes.link}>
          Numbers
        </Link>
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
          [classes.listItem]: true,
          [classes.featuresLink]: true,
          [classes.scrollActive]:trigger,
          [classes.activeLink]: '/features' === location.pathname && !trigger ,
        })}
      >
        <Link to={'/features'} className={classes.link}>
          Features
        </Link>

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
          [classes.listItem]: true,
          [classes.platformLink]: true,
          [classes.scrollActive]:trigger,
          [classes.activeLink]: '/platform' === location.pathname && !trigger ,
        })}
      >
        <Link to={'/platform'} className={classes.link}>
        platform
        </Link>

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
        className={classNames({
          [classes.listItem]: true,
          [classes.activeLink]: '/support' === location.pathname && !trigger ,
          [classes.scrollActive]:trigger,
        })}
      >
        <Link to={'/support'} className={classes.link}>
          Support
        </Link>
      </ListItem>
      {/* ))} */}
      <ListItem className={classNames({[classes.listItem]: true})}>
        {rightChip}
      </ListItem>
    </List>
  );

  return renderRightMenu;
}
