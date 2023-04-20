module.exports = {
	env: { browser: true, es2020: true },
	overrides: [
		{
			files: ["**/*.cjs"],
			env: {
				node: true,
			},
		},
	],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react"],
	rules: {
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
	},
};
