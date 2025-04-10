import React, {useEffect, useState} from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import {Link, useNavigate} from "react-router-dom";

const NavigationBarApp: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = () => {
            const token = localStorage.getItem("userToken");
            setIsLoggedIn(!!token);
        };

        checkLogin(); // 최초 확인

        // ✅ 커스텀 이벤트로 로그인 상태 감지
        window.addEventListener("user-token-changed", checkLogin);

        return () => {
            window.removeEventListener("user-token-changed", checkLogin);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userToken");
        window.dispatchEvent(new Event("user-token-changed")); // ✅ 상태 반영을 위한 이벤트 발생
        navigate("/");
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Navigation Bar
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/html-css-test">
                    HTML/CSS Test
                </Button>
                <Button color="inherit" component={Link} to="/javascript-test">
                    Javascript Test
                </Button>
                <Button color="inherit" component={Link} to="/board/list">
                    게시판
                </Button>
                <Button color="inherit" component={Link} to="/svelte-test">
                    Svelte 테스트
                </Button>
                {isLoggedIn ? (
                    <Button color="inherit" onClick={handleLogout}>
                        로그아웃
                    </Button>
                ) : (
                    <Button color="inherit" component={Link} to="/authentication">
                        로그인
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBarApp;
