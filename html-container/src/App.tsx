import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@mui/material";

const App = () => {
    return (
        <div>
            <h2>Remote App (html-css-test-app)</h2>
            <Button variant="contained" color="primary">
                MUI Button
            </Button>
        </div>
    );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
