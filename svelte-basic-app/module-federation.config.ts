export const mfConfig = {
  name: "svelteBasicApp",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.svelte",
  },
  shared: ["svelte"],
  dts: false,
};
