import React from 'react';
import './App.css';

// Material UI (Core)
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

// Material UI (Icons)
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExploreIcon from '@material-ui/icons/Explore';
import MoreIcon from '@material-ui/icons/MoreVert';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { shadows } from '@material-ui/system';


import StickyBox from "react-sticky-box";


import ContentCard from './postcontent'; // Import a component from another file


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sideBarCard: {
    marginTop: 50,
    minWidth: 275,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.05),
    }
  },
  sideBarCardDividerOne: {
    marginTop: 5,
    marginBottom: 20,
  },
  sidebarContainer: {
    marginTop: 10,
  },
  sidebarAvatar: {
    marginRight: 10
  },
  sidebarAvatarHasPosting: {
    color: 'red',
  },
  sideBarCardFriendActive: {
    marginTop: -5
  },
  title: {
    display: 'none',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const Users = {
    "john": {"name": "John Doe", "profile_picture": "https://randomuser.me/api/portraits/men/32.jpg"},
    "kate": {"name": "Kate Doe", "profile_picture": "https://randomuser.me/api/portraits/women/47.jpg"},
    "lucy": {"name": "Lucy James", "profile_picture": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=d5849d81af587a09dbcf3f11f6fa122f"},
    "joe": {"name": "Joe Hanson", "profile_picture": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg"},
    "clark": {"name": "Clark Kent", "profile_picture": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNTExMzUzOF5BMl5BanBnXkFtZTgwOTI1MjA3OTE@._V1_UX172_CR0,0,172,256_AL_.jpg"},
    "bruce": {"name": "Bruce Wyane", "profile_picture": "https://pbs.twimg.com/profile_images/953000038967468033/n4Ngwvi7.jpg"},
    "kim": {"name": "Kim Watson", "profile_picture": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?h=350&auto=compress&cs=tinysrgb"}
  }
  const ContentFeed = [
  {
    "user_id": "john",
    "content_type": "image",
    "content_link": "https://cdn.pixabay.com/photo/2019/07/24/02/54/machining-4359091_960_720.jpg",
    "date": "September 14, 2016"
  },
  {
    "user_id": "kate",
    "content_type": "image",
    "content_link": "https://cdn.pixabay.com/photo/2019/07/25/08/41/rauhaardackel-4362064__340.jpg",
    "date": "September 14, 2016"
  },
  {
    "user_id": "kate",
    "content_type": "video",
    "content_link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "poster_link": "https://storage.googleapis.com/coverr-public/poster/Egg-Shop.jpg",
    "date": "September 14, 2016"
  },
  {
    "user_id": "kate",
    "content_type": "video",
    "content_link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "poster_link": "https://storage.googleapis.com/coverr-public/poster/Sugar.jpg",
    "date": "September 14, 2016"
  },
  {
    "user_id": "lucy",
    "content_type": "image",
    "content_link": "https://cdn.pixabay.com/photo/2019/07/25/20/17/norway-4363362__340.jpg",
    "date": "September 14, 2016"
  },
  {
    "user_id": "joe",
    "content_type": "image",
    "content_link": "https://cdn.pixabay.com/photo/2019/07/23/08/07/starbucks-4356904__340.jpg",
    "date": "September 14, 2016"
  },
  {
    "user_id": "kate",
    "content_type": "video",
    "content_link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "poster_link": "https://storage.googleapis.com/coverr-public/poster/Gold.jpg",
    "date": "September 14, 2016"
  },
  {
    "user_id": "clark",
    "content_type": "image",
    "content_link": "https://cdn.pixabay.com/photo/2019/07/28/07/30/cycling-4368057__340.jpg",
    "date": "September 14, 2016"
  },
  {
    "user_id": "bruce",
    "content_type": "image",
    "content_link": "https://cdn.pixabay.com/photo/2019/07/10/08/31/animal-4328196__340.jpg",
    "date": "September 14, 2016"
  },
  {
    "user_id": "kate",
    "content_type": "video",
    "content_link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "poster_link": "https://storage.googleapis.com/coverr-public/poster/Designer.jpg",
    "date": "September 14, 2016"
  },
  {
    "user_id": "kim",
    "content_type": "image",
    "content_link": "https://cdn.pixabay.com/photo/2019/07/25/14/39/skipper-4362807_960_720.jpg",
    "date": "September 14, 2016"
  },
  ];
  const FriendsList = [{"user": Users.john, "last_active": "18 hours ago"},
                      {"user": Users.kate, "last_active": "18 hours ago"},
                      {"user": Users.lucy, "last_active": "18 hours ago"},
                      {"user": Users.joe, "last_active": "18 hours ago"},
                      {"user": Users.clark, "last_active": "18 hours ago"},
                      {"user": Users.bruce, "last_active": "18 hours ago"},
                      {"user": Users.kim, "last_active": "18 hours ago"}]

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <ExploreIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>Reactive Social</Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <ExploreIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={8}>
                {ContentFeed.map(function(item) {
                  return <ContentCard
                            title={Users[item.user_id].name}
                            avatar_link={Users[item.user_id].profile_picture}
                            content_type={item.content_type}
                            content_link={item.content_link}
                            poster_link={item.poster_link}
                            date={item.date}/>;
                })}
            </Grid>
            <Grid item xs={1}>
                <StickyBox offsetTop={50} offsetBottom={20}>
                  <Card className={classes.sideBarCard}>
                    <CardContent>
                      <Grid container direction="row" justify="space-between" alignItems="center">
                        <Typography color="textSecondary" gutterBottom>Stories</Typography>
                        <Link component="button" variant="body2" color="secondary" onClick={() => {alert("I'm a button.");}}>Watch All</Link>
                      </Grid>
                      <CssBaseline />
                      <Divider className={classes.sideBarCardDividerOne} variant="middle" />
                      {FriendsList.map(function(item, index) {
                        return(
                          <Grid container spacing={2}>
                            <Grid item xs={3}>
                            <Badge className={classes.sidebarAvatarHasPosting} variant="dot" color="secondary">
                              <Avatar src={item.user.profile_picture} className={classes.sidebarAvatar}></Avatar>
                              </Badge>
                            </Grid>
                            <Grid item xs={6}>
                              <Grid container direction="row" alignItems="center">
                                <Typography className={classes.sideBarCardFriendName} variant="subtitle2" color="primary" gutterBottom>{item.user.name}</Typography>
                                <Typography className={classes.sideBarCardFriendActive} variant="caption" display="block" color="textSecondary" gutterBottom>{item.last_active}</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          );
                      })}
                      
                    </CardContent>
                  </Card>
                </StickyBox>
            </Grid>
          </Grid>
        </Container>
    </React.Fragment>
    </div>
  );
};

export default App;
