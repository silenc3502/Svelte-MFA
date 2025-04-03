import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { CircularProgress, Typography } from "@mui/material";

import { CalculationExample } from "./components/CalculationExample";
import { OperatorsExample } from "./components/OperatorsExample.tsx";
import { VariablesAndDataTypes } from "./components/VariableAndDataTypes.tsx";
import { TypeCoercion } from "./components/TypeCoercion.tsx";
import { ControlFlowIf } from "./components/ControlFlowIf.tsx";
import { ControlFlowSwitch } from "./components/ControlFlowSwitch.tsx";
import { ControlFlowFor } from "./components/ControlFlowFor.tsx";
import { ControlFlowWhile } from "./components/ControlFlowWhile.tsx";
import { ControlFlowForEach } from "./components/ControlFlowForEach.tsx";
import { ControlFlowTryCatch } from "./components/ControlFlowTryCatch.tsx";
import { MapExample } from "./components/MapExample.tsx";
import { FilterExample } from "./components/FilterExample.tsx";
import { BreakExample } from "./components/BreakExample.tsx";
import { ContinueExample } from "./components/ContinueExample.tsx";
import {RegExpExample} from "./components/RegExpExample.tsx";
import {StringExample} from "./components/StringExample.tsx";
import {ArrayPushExample} from "./components/ArrayPushExample.tsx";
import {ArrayPopExample} from "./components/ArrayPopExample.tsx";
import {ArrayShiftExample} from "./components/ArrayShiftExample.tsx";
import {ArrayUnshiftExample} from "./components/ArrayUnshiftExample.tsx";
import {ArrayMapExample} from "./components/ArrayMapExample.tsx";
import {ArrayFilterExample} from "./components/ArrayFilterExample.tsx";
import {ArrayReduceExample} from "./components/ArrayReduceExample.tsx";
import {ArrayFindExample} from "./components/ArrayFindExample.tsx";
import {ArrayFindIndexExample} from "./components/ArrayFindIndexExample.tsx";
import {ArrayIncludesExample} from "./components/ArrayIncludesExample.tsx";
import {ArrayIndexOfExample} from "./components/ArrayIndexOfExample.tsx";
import {ArraySliceExample} from "./components/ArraySliceExample.tsx";
import {ArraySpliceExample} from "./components/ArraySpliceExample.tsx";
import {ArraySortExample} from "./components/ArraySortExample.tsx";
import {ArrayReverseExample} from "./components/ArrayReverseExample.tsx";
import {ArrayEveryExample} from "./components/ArrayEveryExample.tsx";
import {ArraySomeExample} from "./components/ArraySomeExample.tsx";
import {ArrayConcatExample} from "./components/ArrayConcatExample.tsx";
import {ArrayJoinExample} from "./components/ArrayJoinExample.tsx";
import {ArrayFlatExample} from "./components/ArrayFlatExample.tsx";

const JavascriptTestApp = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>JavaScript 필수 요소</Typography>
            <CalculationExample />
            <VariablesAndDataTypes />
            <OperatorsExample />
            <TypeCoercion />
            <ControlFlowIf />
            <ControlFlowSwitch />
            <ControlFlowFor />
            <ControlFlowWhile />
            <ControlFlowForEach />
            <ControlFlowTryCatch />
            <MapExample />
            <FilterExample />
            <BreakExample />
            <ContinueExample />
            <RegExpExample />
            <StringExample />
            <ArrayPushExample />
            <ArrayPopExample />
            <ArrayShiftExample />
            <ArrayUnshiftExample />
            <ArrayMapExample />
            <ArrayFilterExample />
            <ArrayReduceExample />
            <ArrayFindExample />
            <ArrayFindIndexExample />
            <ArrayIncludesExample />
            <ArrayIndexOfExample />
            <ArraySliceExample />
            <ArraySpliceExample />
            <ArraySortExample />
            <ArrayReverseExample />
            <ArrayEveryExample />
            <ArraySomeExample />
            <ArrayConcatExample />
            <ArrayJoinExample />
            <ArrayFlatExample />
        </div>
    );
};

export default JavascriptTestApp;
