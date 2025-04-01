import ReactDOM from "react-dom/client";

import "./index.css";

const App = () => (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: html-css-test-app</div>
        <div>Framework: react-19</div>
    </div>
);

export default App; // Default export 추가

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
