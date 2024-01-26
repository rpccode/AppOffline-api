const path = require('path');

module.exports = {
    entry: './src/index.js',  // Archivo principal de entrada
    output: {
        filename: 'bundle.js',  // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'),  // Directorio de salida
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',  // Puedes necesitar instalar babel-loader y configurar Babel según tus necesidades
                },
            },
        ],
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify")
        }
    }
};
