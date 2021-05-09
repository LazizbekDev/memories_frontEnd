import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

// const memory = './images/memory.png';

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" algin="center">Memories</Typography>
                <img src='./images/memory.png' alt="memories" height="60px"/>
            </AppBar>
        </Container>
    )
}

export default App;
