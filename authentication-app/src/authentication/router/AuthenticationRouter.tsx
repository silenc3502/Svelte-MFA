import React, { Suspense } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage.tsx";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>로딩중 ........</div>}>
            <Routes>
                <Route path="/" element={<Navigate to="login" replace/>}/>
                <Route path="login" element={<AuthenticationPage/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
