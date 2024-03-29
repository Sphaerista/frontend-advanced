import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildCssloader } from "../build/loaders/buildCssloader";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "", "", "src"),
  };
  config?.resolve?.modules?.push(paths.src);
  config?.resolve?.extensions?.push(".ts", ".tsx");
  config?.module?.rules?.push(buildCssloader(true));

  if (config.module) {
    config.module.rules = config.module.rules
      ? config.module.rules.map((rule: RuleSetRule | "...") => {
          if (
            rule !== "..." &&
            rule.test instanceof RegExp &&
            rule.test.toString().includes("svg")
          ) {
            return { ...rule, exclude: /\.svg$/i };
          }

          return rule;
        })
      : [];
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.plugins?.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(""),
        __PROJECT__: JSON.stringify("storybook"),
      })
    );
  }
  if (config!.resolve!.modules) {
    config!.resolve!.modules = [
      path.resolve(__dirname, "../../src"),
      "node_modules",
    ];
  }
  config!.resolve!.alias = {
    entities: path.resolve(__dirname, "..", "..", "src", "entities"),
  };

  return config;
};
