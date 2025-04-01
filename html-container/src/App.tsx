import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    const [Component, setComponent] = useState<React.ComponentType | null>(null);

    useEffect(() => {
        import("htmlCssTestApp/App").then((module) => {
            setComponent(() => module.default); // Ensure you're accessing the default export
        });
    }, []);

    if (!Component) return <div>Loading...</div>;

    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div>Name: html-container</div>
            <div>Framework: react-19</div>
            <Component /> {/* Rendering the App component from html-css-test-app */}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
