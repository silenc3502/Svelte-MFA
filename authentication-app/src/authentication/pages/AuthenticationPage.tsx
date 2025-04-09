import React from "react";
import { Box, Typography } from "@mui/material";
import SocialLoginButton from "../ui/components/SocialLoginButton.tsx";
import env from "../../env";

const AuthenticationPage: React.FC = () => {
    const handleGoogleLogin = () => {
        const googleAuthUrl = env.api.GOOGLE_AUTHENTICATION_URL;
        const popup = window.open(googleAuthUrl, '_blank', 'width=500,height=600');

        const receiveMessage = (event: MessageEvent) => {
            if (event.origin !== 'http://localhost:3000') return;

            const { accessToken, user } = event.data;
            console.log('✅ 로그인 성공:', accessToken, user);

            localStorage.setItem('accessToken', accessToken);

            popup?.close();
            window.removeEventListener('message', receiveMessage);
        };

        window.addEventListener('message', receiveMessage);
    };

    return (
        <Box sx={{ p: 4, maxWidth: 400, margin: "0 auto" }}>
            <Typography variant="h5" gutterBottom>로그인</Typography>
            <SocialLoginButton provider="google" onClick={handleGoogleLogin} />
        </Box>
    );
};

export default AuthenticationPage;
