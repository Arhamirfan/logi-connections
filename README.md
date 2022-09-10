# 1. Problem statement:  

ERROR in ./node_modules/eth-lib/lib/bytes.js 9:193-227

Module not found: Error: Can't resolve 'crypto' in 'C:\Users\PC\Desktop\Portfolio\portfolio_app\node_modules\eth-lib\lib'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
    - add a fallback 'resolve.fallback: { "crypto": require.resolve("crypto-browserify") }'
    - install 'crypto-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
    resolve.fallback: { "crypto": false }


ERROR in ./node_modules/web3-eth-accounts/lib/index.js 31:74-91


## Solution:



At node-modules/react-scripts/config/webpack.config.js :

module.exports = {
    resolve: {
        fallback: {
            assert: require.resolve('assert'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            stream: require.resolve('stream-browserify'),
        },
    },
};

Create .env file and Add:
GENERATE_SOURCEMAP=false



# 2. Problem statement:  Buffer is not defined at varintEncode (util.js:33:1)

## Solution:

Added:
import { Buffer } from 'buffer';
window.Buffer = Buffer;
To every web3 function


npm install node-polyfill-webpack-plugin

Uninstall Webpack 5: npm uninstall webpack

delete package-lock.json

Go to package.json and change from "React-scripts": "5.0.0" to "React-scripts": "4.0.3",

install webpack 4: npm install webpack@4.44.2

npm install

npm run start
