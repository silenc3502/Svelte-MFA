import React from "react";
import { RecoilRoot } from "recoil";
import AuthenticationRouter from "./authentication/router/AuthenticationRouter.tsx";

const AuthenticationApp: React.FC = () => {
    console.log("✅ AuthenticationApp 렌더링됨");

    return (
        <RecoilRoot>
            <AuthenticationRouter />
        </RecoilRoot>
    );
};

export default AuthenticationApp;
