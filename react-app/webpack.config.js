const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "single-spa-sandbox",
    projectName: "react-app",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      filename: "react-app.js",  // Ensure output filename
      libraryTarget: "system",   // Make it compatible with SystemJS
      publicPath: "/",           // Ensure it serves from the root
    },
  });
};
