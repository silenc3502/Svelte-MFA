export const mfConfig = {
  name: "htmlCssTestApp",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App"
  },
  shared: {
    "react": {
      singleton: true,
      eager: true,
      requiredVersion: "^19.0.0", // React 버전 일치
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: "^19.0.0", // React-DOM 버전 일치
    },
    "@mui/material": {
      singleton: true,
      eager: true,
      requiredVersion: "^7.0.1", // MUI 버전 일치
    },
    "@emotion/react": {
      singleton: true,
      eager: true,
      requiredVersion: "^11.14.0", // Emotion React 버전 일치
    },
    "@emotion/styled": {
      singleton: true,
      eager: true,
      requiredVersion: "^11.14.0", // Emotion Styled 버전 일치
    },
  },
};
