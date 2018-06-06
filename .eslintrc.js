module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true,
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "rules": {
        "strict": 0
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "babel"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "array-bracket-spacing": [
            "error",
            "never",
        ],
        "object-curly-spacing": [
            "error",
            "always",
        ],
        "react/jsx-uses-vars": [
            "error"
        ],
        "react/jsx-uses-react": [
            "error"
        ],
        "no-console": "off"
    }
};