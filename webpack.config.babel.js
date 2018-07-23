const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

export default () => (
    {
        mode: 'production',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'webpack-numbers.js',
            libraryTarget: 'umd',
            globalObject: 'this',
            // libraryExport: 'default',
            library: 'webpackNumbers'
        },
        plugins: [
            new LodashModuleReplacementPlugin
        ],
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                }
            ]
        },
    }
);
