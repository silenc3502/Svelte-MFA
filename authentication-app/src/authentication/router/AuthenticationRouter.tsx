import React, { Suspense } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage.tsx";
import GoogleAuthenticationCallback from "../pages/GoogleAuthenticationCallback.tsx";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>로딩중 ........</div>}>
            <Routes>
                <Route path="/" element={<Navigate to="login" replace/>}/>
                <Route path="/login" element={<AuthenticationPage/>}/>
                <Route path="/oauth/callback" element={<GoogleAuthenticationCallback />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
