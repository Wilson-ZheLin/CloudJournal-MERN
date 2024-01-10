import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { Card, CardActions, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

import useStyles from "./styles";
import { deletePost, likePost } from '../../../actions/posts';
import { getUser } from '../../../actions/user';
import { COLORS } from "../../../constants/actionTypes";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [creator, setCreator] = useState(null);
  
    useEffect(() => {
      const fetchCreator = async () => {
          try {
            const data = await getUser(post.creator)(dispatch);
            setCreator(data);
          } catch (error) {
            console.error("Error fetching creator data:", error);
          }
      };
      fetchCreator();
    }, [post.creator, dispatch]);

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

    return (
        <Card className={classes.card} sx ={{ borderRadius: '8px' }} raised elevation={4}>
            <CardHeader 
              className={classes.cardHeader}
              avatar={
                creator && creator.picture ? 
                  <Avatar src={creator.picture} alt={creator.name} aria-label="recipe" /> 
                  :
                  <Avatar sx={{ bgcolor: COLORS[ creator ? creator.color : 5 ]}} aria-label="recipe">
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
                <Typography gutterBottom variant="subtitle1" component="h2">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.message}>{post.message}</Typography>
              </CardContent>

              <div className={classes.details}>
                <Typography variant="overline" color="textSecondary" component="h2" className={classes.tags}>{post.tags.map((tag) => `#${tag} `)}</Typography>
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