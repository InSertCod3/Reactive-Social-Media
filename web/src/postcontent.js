import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import BookOutlined from '@material-ui/icons/BookOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  BigPlayButton,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';

const styles = {
    card: {
      maxWidth: 720,
      margin: 20,
      '&:hover': {
        backgroundColor: fade('#c7c6c2', 0.05),
      }
    },
    chip: {
        margin: 5,
    },
    mediaImage: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    mediaVideo: {
      paddingTop: '0%',
      object: 'cover',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  };

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function ContentCard(props) {
    const { classes, title, content_type, avatar_link, content_link, date, poster_link } = props;
    const [expanded, setExpanded] = React.useState(false);

    const colortypes = ['primary', 'secondary', 'default']
    const chiphashtags = [{'name': '#basic', 'color': choose(colortypes)},
                          {'name': '#refreshing', 'color': choose(colortypes)},
                          {'name': '#amazing', 'color': choose(colortypes)},
                          {'name': '#unique', 'color': choose(colortypes)},
                          {'name': '#levels', 'color': choose(colortypes)},
                          {'name': '#simple', 'color': choose(colortypes)},
                          {'name': '#different', 'color': choose(colortypes)}];

    function handleExpandClick() {
      setExpanded(!expanded);
    }
    
    function VideoMedia(props) {
      const {content_type, content_link, poster_link} = props;
      if (content_type === "image") {
        return <CardMedia
              className={classes.mediaImage}
              image={content_link}
              title="Paella dish"
            />
      }
      return <Player controls className={classes.mediaVideo} fluid={true} poster={poster_link}>
              <source src={content_link} />
              <BigPlayButton position="center" />
              <ControlBar disableCompletely={false} disableDefaultControls={false}>
                <ReplayControl seconds={10} order={1.1} />
                <ForwardControl seconds={30} order={1.2} />
                <CurrentTimeDisplay order={4.1} />
                <TimeDivider order={4.2} />
                <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                <VolumeMenuButton disabled />
              </ControlBar>
            </Player>;
    }

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar_link} className={classes.avatar}></Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => {alert(title);}}>
              <FavoriteBorder />
            </IconButton>
          }
          title={title}
          subheader={<Typography variant="caption" display="block" color="textSecondary" gutterBottom>{date} ~ 1.4k Likes</Typography>}
        />
        <VideoMedia content_type={content_type} content_link={content_link} poster_link={poster_link} />
        <CardContent>
            {chiphashtags.map(function(item) {
                return <Chip label={item.name} className={classes.chip} color={item.color} size="small" variant="outlined" />;
            })}
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <BookOutlined />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }

ContentCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentCard);