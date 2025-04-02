import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { CircularProgress, Typography } from "@mui/material";

import { CalculationExample } from "./components/CalculationExample";
import { OperatorsExample } from "./components/OperatorsExample.tsx";
import { VariablesAndDataTypes } from "./components/VariableAndDataTypes.tsx";

const JavascriptTestApp = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>JavaScript 필수 요소</Typography>
            <CalculationExample />
            <VariablesAndDataTypes />
            <OperatorsExample />
        </div>
    );
};

export default JavascriptTestApp;
