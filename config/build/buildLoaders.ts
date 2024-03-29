import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssloader } from "./loaders/buildCssloader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const cssLoader = buildCssloader(isDev);
  //  use baabel-loader if typescript not used
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: "ts-loader",
  //   exclude: /node_modules/,
  // };
  return [
    cssLoader,
    svgLoader,
    fileLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
  ];
}
