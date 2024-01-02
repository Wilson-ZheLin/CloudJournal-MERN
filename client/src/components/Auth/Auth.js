import React, { useState } from 'react';
import { Avatar, Button, Typography, Grid, Container, Paper, TextField } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import FileBase from 'react-file-base64';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Icon from './icon';
import Input from './Input';
import useStyles from './styles';
import { signin, signup } from '../../actions/auth';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [FormData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        picture: '',
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup) {
            dispatch(signup(FormData, navigate));
        } else {
            dispatch(signin(FormData, navigate));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const googleSuccess = async (res) => {
        const credential = res?.credential;
        try {
            const decodedCredential = jwtDecode(credential);
            const result = {
                name: decodedCredential.name,
                email: decodedCredential.email,
                picture: decodedCredential.picture,
                _id: decodedCredential.sub
            }
            dispatch({ type: 'AUTH', data: { result, credential } });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const googleError = (error) => {
        console.log(error);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    { isSignup && (
                        <>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                        </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                        { isSignup && <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...FormData, picture: base64 })} /></div>}
                        <Grid item xs={12}>
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            { isSignup ? 'Sign Up' : 'Sign In' }
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <GoogleLogin
                                render={(renderProps) => (
                                    <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                        Google Sign In
                                    </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleError}
                                cookiePolicy={"single_host_origin"}
                            />
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;