const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");

module.exports = function override(config, env) {
	config = injectBabelPlugin("babel-plugin-styled-components", config);
	config = rewireMobX(config, env);

	return config;
};

const {
	override,
	addDecoratorsLegacy,
	disableEsLint,
} = require("customize-cra");
const path = require("path");

module.exports = override(
	// enable legacy decorators babel plugin
	addDecoratorsLegacy(),

	// disable eslint in webpack
	disableEsLint(),
);