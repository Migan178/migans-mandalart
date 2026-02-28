/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
	...require("@migan/prettier-config"),
	plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
};
