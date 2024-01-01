import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { red, green, blue, yellow, purple } from '@mui/material/colors';

import useStyles from "./styles";
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
      const userId = user?.result?._id;
      const isLiked = post.likes.includes(userId);
    
      return (
        <FavoriteIcon fontSize="small" sx={{ color: isLiked ? '#D32F2F' : 'inherit' }} />
      );
    };

    const openPost = () => {
      navigate(`/posts/${post._id}`);
    }

    const colors = [red[500], blue[500], green[500], yellow[500], purple[500]];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <Card className={classes.card} sx ={{ borderRadius: '8px' }} raised elevation={4}>
            <CardHeader 
              className={classes.cardHeader}
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {post.name?.charAt(0)?.toUpperCase()}
                </Avatar>
              }
              action={
                (user?.result?.email === post?.creator || user?.result?._id === post?.creator) ?
                  <IconButton aria-label="settings" onClick={() => setCurrentId(post._id)}>
                    <MoreVertIcon />
                  </IconButton>
                : null
              }
              title={post.name}
              subheader={moment(post.createdAt).format('MMM DD, YYYY')}
            />
            <CardActionArea onClick={openPost}>
              <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}/>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
              </CardContent>

              <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
              </div>
            </CardActionArea>
            
          <CardActions className={classes.cardActions}>
            
            <div className={classes.like}>
              <IconButton aria-label="add to favorites" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))} sx={{ ml: '0'}}><Likes /></IconButton>
              <Typography variant="body2" color="textSecondary" component="h2">{post.likes.length}</Typography>
            </div>
            {(user?.result?.email === post?.creator || user?.result?._id === post?.creator) && (
              <IconButton size="small" className={classes.delete} aria-label="edit" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon /></IconButton>
            )}
          </CardActions>
        </Card>
    );
};

export default Post;