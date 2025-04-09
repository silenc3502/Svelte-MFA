import { useEffect } from "react";

const GoogleAuthenticationCallback = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const accessToken = params.get("userToken"); // 서버에서 토큰 넘길 때 쿼리 파라미터로 넘긴다고 가정

        console.log("📥 콜백 페이지 도착");
        console.log("✅ accessToken:", accessToken);

        if (accessToken && window.opener) {
            window.opener.postMessage(
                {
                    accessToken,
                    user: { name: "테스트유저" },
                },
                "http://localhost:3000" // 부모 창 origin
            );

            window.close();
        }
    }, []);

    return <div>로그인 처리 중...</div>;
};

export default GoogleAuthenticationCallback;
