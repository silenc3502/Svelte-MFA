import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// 네비게이션 바 컴포넌트를 lazy 로드
const NavigationBarApp = lazy(() => import("navigationBarApp/App"));
const HtmlCssTestApp = lazy(() => import("htmlCssTestApp/App"));
const JavaScriptTestApp = lazy(() => import("javascriptTestApp/App"));

const App = () => {
    const [isNavigationBarLoaded, setIsNavigationBarLoaded] = useState(false);

    useEffect(() => {
        import("navigationBarApp/App")
            .then(() => setIsNavigationBarLoaded(true))
            .catch((err) => console.error("Failed to load navigation bar:", err));
    }, []);

    return (
        <BrowserRouter>
            <Suspense fallback={<CircularProgress />}>
                {/* ✅ 네비게이션 바를 Routes 바깥에 둠 (항상 표시됨) */}
                <NavigationBarApp />

                {/* ✅ URL에 따라 다른 페이지를 렌더링 */}
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/html-css-test" element={<HtmlCssTestApp />} />
                    <Route path="/javascript-test" element={<JavaScriptTestApp />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;

const container = document.getElementById("app") as HTMLElement;
if (!container) {
    throw new Error("Root container #app not found");
}

const root = ReactDOM.createRoot(container);
root.render(<App />);
