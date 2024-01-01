import React, { useRef, useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { commentPost } from '../../actions/posts';

const CommentSection = ({ post }) => {
    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const commentsRef = useRef();
    const user = JSON.parse(localStorage.getItem('profile'));

    const handleComment = async () => {
        const finalComment = `${user?.result?.name}: ${comment}`;
        const newComments = await dispatch(commentPost(finalComment, post._id));
        setComment('');
        setComments(newComments);
    };

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer} style={{ width: '50%' }}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                        {comments?.map((c, i) => (
                            <Typography key={i} gutterBottom variant="subtitle1">
                            <strong>{c.split(': ')[0]}:</strong>
                            {c.split(':')[1]}
                            </Typography>
                        ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div style={{ width: '50%' }}>
                        <Typography gutterBottom variant="h6">Write a comment</Typography>
                        <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
                        <br />
                        <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;