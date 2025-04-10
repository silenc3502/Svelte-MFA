import React from "react";
import { Box, Typography } from "@mui/material";
import SocialLoginButton from "../ui/components/SocialLoginButton";

import env from "../../env";
import {useNavigate} from "react-router-dom";

const AuthenticationPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        const googleAuthUrl = env.api.GOOGLE_AUTHENTICATION_URL;
        const popup = window.open(googleAuthUrl, '_blank', 'width=500,height=600');

        const receiveMessage = (event: MessageEvent) => {
            if (event.origin !== 'http://localhost:3000') return;

            const { accessToken, user } = event.data;
            console.log('✅ 로그인 성공:', accessToken, user);

            localStorage.setItem('userToken', accessToken);
            window.dispatchEvent(new Event("user-token-changed")); // ← 요거 추가

            window.removeEventListener('message', receiveMessage);
            popup?.close();

            navigate('/');
        };

        window.addEventListener('message', receiveMessage);
    };

    return (
        <Box sx={{ p: 4, maxWidth: 400, margin: "0 auto" }}>
            <Typography variant="h5" gutterBottom>
                로그인
            </Typography>
            <SocialLoginButton provider="google" onClick={handleGoogleLogin} />
        </Box>
    );
};

export default AuthenticationPage;
