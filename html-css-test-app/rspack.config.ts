import { rspack } from "@rspack/core";
import * as path from "node:path";
import { defineConfig } from "@rspack/cli";
import * as RefreshPlugin from "@rspack/plugin-react-refresh";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

import { mfConfig } from "./module-federation.config";

const isDev = process.env.NODE_ENV === "development";

// Target browsers
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];

export default defineConfig({
  context: __dirname,
  entry: {
    main: "./src/index.ts",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"],
    alias: {
      "@mui/material": path.resolve(__dirname, "node_modules/@mui/material/esm/"),
    },
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, "src")],
  },
  output: {
    uniqueName: "html_css_test_app",
    publicPath: "http://localhost:3001/",
  },
  experiments: {
    css: true,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.css$/,
        use: ["postcss-loader"],
        type: "css",
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
    new ModuleFederationPlugin({
      ...mfConfig,
      shared: {
        ...mfConfig.shared,
        "@mui/material": {
          singleton: true,
          eager: true,
          requiredVersion: "^7.0.1", // 정확한 버전 명시
        },
        "@emotion/react": {
          singleton: true,
          eager: true,
          requiredVersion: "^11.14.0",
        },
        "@emotion/styled": {
          singleton: true,
          eager: true,
          requiredVersion: "^11.14.0",
        },
      },
    }),
    isDev ? new RefreshPlugin() : null,
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
});
