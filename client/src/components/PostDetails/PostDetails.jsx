import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import { Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';

import useStyles from './styles';
import { getPost, getPostBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';

const Post = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
      dispatch(getPost(id));
    }, [id]);

    useEffect(() => {
      if (post) {
        dispatch(getPostBySearch({ search: 'none', tags: post?.tags?.join(',') }));
      }
    }, [post]);

    if (!post) return null;
  
    const openPost = (_id) => navigate(`/posts/${_id}`);
  
    if (isLoading) {
      return (
        <Paper elevation={4} className={classes.loadingPaper}>
          <CircularProgress size="7em" />
        </Paper>
      );
    }
  
    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  
    return (
      <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={4}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">{post.title}</Typography>
            <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            <Divider style={{ margin: '10px 0' }} />
            <Typography variant="body1">Created by: {post.name}&nbsp;|&nbsp;{moment(post.createdAt).format('YYYY-MM-DD')}</Typography>
            <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
          </div>
          <div className={classes.imageSection}>
            <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </div>
        </div>
        <Divider style={{ margin: '20px 0' }} />
        <div className={classes.section}>
            <CommentSection post={post} />
        </div>
        {!!recommendedPosts.length && (
          <div className={classes.section}>
            <Typography gutterBottom variant="h5">You might also like:</Typography>
            <Divider />
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
                <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                  <Typography gutterBottom variant="h6">{title}</Typography>
                  <Typography gutterBottom variant="subtitle2">{name}</Typography>
                  <Typography gutterBottom variant="subtitle2">{message}</Typography>
                  <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                  <img src={selectedFile} width="200px" alt=''/>
                </div>
              ))}
            </div>
          </div>
        )}
      </Paper>
    );
  };
  
  export default Post;
  