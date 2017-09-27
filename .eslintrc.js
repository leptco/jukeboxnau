/*eslint-disable */
module.exports = {
	'root': true,
	'extends': ['nau-react'],
	'rules': {
		'no-shadow': 'off',
		'react/prefer-stateless-function': 'off'
	},
	'globals': {},
	'env': {
		'browser': true,
		'node': true,
		'es6': true,
		'jest': true,
	},
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaVersion': 8,
		'sourceType': 'module',
		'ecmaFeatures': {
			'impliedStrict': true,
			'jsx': true,
			'classes': true,
		},
	},
	'plugins': [
		'import'
	],
};
