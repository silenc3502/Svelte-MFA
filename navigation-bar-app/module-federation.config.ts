export const mfConfig = {
  name: "navigationBarApp",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App", // NavigationBar 컴포넌트를 expose
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.2.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
    "@mui/material": { singleton: true, requiredVersion: "^7.0.1" },
  },
};
