const path = require('path');
//  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        serverEntry: ['./entry/serverEntry.js']
        //  serverEntry: ['./entry/component/index.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
        publicPath: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: [
                                '@babel/react', 
                                '@babel/preset-env'
                            ],
                            plugins: [
                                //  这个拿来做注入代码优化的
                                ['@babel/plugin-transform-runtime',
                                {
                                    "corejs": false,
                                    "helpers": true,
                                    "regenerator": true,
                                    "useESModules": false
                                }],
                                //  识别class 语法
                                //  "@babel/plugin-proposal-class-properties"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'isomorphic-style-loader',
                    //  server端渲染不能要，否则无法isomorphic-style-loader提取出css
                    //  MiniCssExtractPlugin.loader,  //自动提取出css
                    'css-loader?modules&localIdentName=[name]__[local]--[hash:base64:5]'
                ]
            },
        ]
    },
    //  mode:"development",
    mode:"production",
}