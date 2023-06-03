module.exports = {
	env: {
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	extends: ["eslint:recommended", "google"],
	rules: {
		"no-restricted-globals": ["error", "name", "length"],
		"prefer-arrow-callback": "error",
		"quotes": ["error", "double", {allowTemplateLiterals: true}],
		"no-tabs": "off",
		"indent": ["error", "tab"],
		"max-len": "off",
	},
	overrides: [
		{
			files: ["**/*.spec.*"],
			env: {
				mocha: true,
			},
			rules: {},
		},
	],
	globals: {},
};