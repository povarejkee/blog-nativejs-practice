const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/index.js'], // запуск ИЗ
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js' // скомпилить в папку dist в файл bundle.js
    },
    devServer: {
        contentBase: __dirname + '/dist' // запускать ИЗ
    },
    plugins: [
        new HTMLPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: ['.js']
    }
}
