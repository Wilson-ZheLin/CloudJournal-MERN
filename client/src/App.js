import React from "react";
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Container maxWidth="xl">
            <Navbar />
            <Routes>
              <Route path="/" element={<Navigate replace to="/posts" />} />
              <Route path="/posts" element={<Home />} />
              <Route path="/posts/search" element={<Home />} />
              <Route path="/posts/:id" element={<PostDetails />} />
              <Route path="/auth" element={(() => !user ? <Auth /> : <Navigate replace to="/posts" />)()} />
            </Routes>
          </Container>
        </BrowserRouter>
      </GoogleOAuthProvider>
    );
};

export default App;
