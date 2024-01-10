import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import { TextField, Button, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { useNavigate, useLocation } from "react-router-dom";

import { getPostBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ currentId, setCurrentId ] = useState(0);
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostBySearch({ search, tags: tags.join(',') }));
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            navigate('/');
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    };

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container className={classes.gridContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7} md={8} lg={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={5} md={4} lg={3}>
                        <AppBar className={classes.component} sx={{ mt: 0 }} position="static" color="inherit">
                            <Typography variant="h6" className={classes.heading}> Search </Typography>
                            <TextField name="search" variant="outlined" sx={{ mb: 1 }} label="Search Posts" fullWidth size="small" value={search} onChange={(e) => {setSearch(e.target.value)}} onKeyDown={handleKeyPress}/>
                            <TextField name="tags" variant="outlined" sx={{ mb: 1 }} label="Tags" fullWidth size="small" value={tags} onChange={(e) => {setTags(e.target.value.split(','))}} onKeyDown={handleKeyPress}/>
                            <Button onClick={searchPost} className={classes.searchButton} color="primary" variant="outlined" size="small">Search</Button>
                        </AppBar>
                        {(!searchQuery && !tags.length) && (
                            <Paper className={classes.component} elevation={4}>
                                <Pagination page={page}/>
                            </Paper>
                        )}
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;