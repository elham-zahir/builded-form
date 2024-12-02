const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx", // ورودی فایل TypeScript
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // افزودن .ts و .tsx برای TypeScript
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // پردازش فایل‌های TypeScript و JSX
        use: "ts-loader", // استفاده از ts-loader برای پردازش فایل‌های TypeScript
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/, // پردازش فایل‌های JSX
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"], // برای تبدیل SVG به کامپوننت‌های React
      },
    ],
  },
};
