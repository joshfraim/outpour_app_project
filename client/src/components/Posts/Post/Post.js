import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant='body2' component='p' color='textSecondary'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
          <Button style= {{color: 'black'}} size='small' onClick= {() => {}}>
              <MoreHorizIcon fontSize='default' />
          </Button>
      </div>
      <CardContent>
          <Typography className={ classes.title } component='p' variant='body2' style={{ textOverflow: "ellipsis", overflow: "hidden" }} gutterBottom>{ post.message }</Typography>
      </CardContent>
      <div className={classes.details}>
          <Typography variant='body2' color='textSecondary' >{ post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <CardActions className= {classes.cardActions}>
            <Button size='small' color= 'primary' onClick= {() => {}}>
                <ThumbUpAltIcon fontSize='small' />
                Like
                {post.likeCount}
            </Button>
            <Button size='small' color= 'primary' onClick= {() => {}}>
                <DeleteIcon fontSize='small' />
                Delete
            </Button>
      </CardActions>
    </Card>
  )
}

export default Post;