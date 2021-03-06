module.exports = (api) => ({
  presets: [
    ["env-modules", { modules: api.env() === "esm" ? false : "commonjs" }],
    ["@babel/react", { runtime: "automatic" }],
    "@babel/typescript",
  ],
});
