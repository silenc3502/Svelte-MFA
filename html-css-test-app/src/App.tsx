import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Button, Typography } from "@mui/material";

const App = () => {
    return (
        <div>
            <Typography variant="h5" gutterBottom>
                This is the Remote Micro Frontend
            </Typography>
            <Button variant="contained" color="primary">
                Click Me
            </Button>
        </div>
    );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);