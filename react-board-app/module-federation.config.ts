export const mfConfig = {
  name: "reactBoardApp",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App", // NavigationBar 컴포넌트를 expose
    // "./boardState": "./src/sharedState/boardState.ts", // Recoil 상태 공유
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.2.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
    "@mui/material": { singleton: true, requiredVersion: "^7.0.1" },
    "react-router-dom": { singleton: true, requiredVersion: "^6.30.0" },
    // recoil: { singleton: true, requiredVersion: "^0.7.7" },
  },
};
