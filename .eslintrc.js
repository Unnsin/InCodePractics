module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest":true
    },
    "extends": './index.js',
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
        'no-underscore-dangle':0,
        'no-param-reassign':0,
        'max-len':0,
        'import/no-extraneous-dependencies':0,
        'import/prefer-default-export': 0,
        'no-multi-spaces': ['error', {
            ignoreEOLComments: false,
        }],
        'vars-on-top': 'error',
        'array-bracket-newline': ['off', 'consistent'],
        'comma-spacing': ['error', { before: false, after: true }],

        
        "strict": 0,
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
            "always"
        ],
        "lines-between-class-members": [
            "error", "always"
        ]
    }
};