import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lazy-load other React apps
const NavigationBarApp = lazy(() => import("navigationBarApp/App"));
const HtmlCssTestApp = lazy(() => import("htmlCssTestApp/App"));
const JavaScriptTestApp = lazy(() => import("javascriptTestApp/App"));
const ReactBoardApp = lazy(() => import("reactBoardApp/App"));

// ✅ Svelte 래퍼 컴포넌트 (JSX 대신 수동 마운트)
const SvelteWrapper = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let component: any;
        import("svelteBasicApp/App")
            .then((mod) => {
                const SvelteApp = mod.default;
                component = new SvelteApp({
                    target: ref.current,
                    props: { message: "Hello from React Container!" },
                });
            })
            .catch((err) => {
                console.error("Failed to mount Svelte app:", err);
            });

        return () => {
            // 💡 Svelte 컴포넌트 정리 (unmount)
            if (component?.$destroy) component.$destroy();
        };
    }, []);

    return <div ref={ref} />;
};

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
                <NavigationBarApp />

                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/html-css-test" element={<HtmlCssTestApp />} />
                    <Route path="/javascript-test" element={<JavaScriptTestApp />} />
                    <Route path="/board/*" element={<ReactBoardApp />} />
                    <Route path="/svelte-test" element={<SvelteWrapper />} />
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
