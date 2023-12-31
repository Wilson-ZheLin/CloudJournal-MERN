import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import Post from "./Post/post";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
    const { posts } = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log("posts", posts);
    // console.log("posts.length", posts.length);

    return (
        !posts?.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
};

export default Posts;