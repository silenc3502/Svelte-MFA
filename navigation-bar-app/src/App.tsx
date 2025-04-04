import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import {Link} from "react-router-dom";

const NavigationBarApp: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Navigation Bar
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/html-css-test">
                    HTML/CSS Test
                </Button>
                <Button color="inherit" component={Link} to="/javascript-test">
                    Javascript Test
                </Button>
                <Button color="inherit" component={Link} to="/board/list">
                    게시판
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBarApp;
