import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const App: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* 왼쪽에 제목 */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Navigation Bar
                </Typography>
                {/* 오른쪽에 버튼들 */}
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default App;


const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);