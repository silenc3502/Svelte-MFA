import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@mui/material";
import { CircularProgress } from "@mui/material";

// 네비게이션 바 컴포넌트를 lazy 로드
const NavigationBarApp = lazy(() => import("navigationBarApp/App"));

const App: React.FC = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress />}>
                <NavigationBarApp /> {/* 네비게이션 바 컴포넌트 */}
            </Suspense>
            <div>
                <h1>Welcome to html-container!</h1>
            </div>
        </div>
    );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
