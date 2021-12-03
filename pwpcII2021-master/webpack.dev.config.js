const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Importar módulo a través de constante

// Importación de eslint
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
    //0.- Establecer modo desarrollo
    mode:'development',
    //1. Especificar archivo de entrada
    entry: './client/index.js',
    //2. Especificar salida
    output:{
        //3.- Ruta absoluta de salida
        path: path.join(__dirname, 'public'),
        //4.- Nombre del archivo de salida
        filename: 'js/bundle.js',
        //5.- Ruta del path público para fines del servidor de desarrollo
        publicPath: '/'
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        port: process.env.PORT ||'3000',
        host: 'localhost'
    },
    module: {
        rules: [
            {
                test: /\.js$/, //Tipos de archivo para aplicar configuraciones
                exclude: /(node_modules|bower_components)/, //Excluir archivos para no transpilar
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        'modules': false,
                                        'useBuiltIns': 'usage', //Cómo va a trabajar babel con las config
                                        'targets': {"chrome":"80"}, //Que tan compatible tiene que ser el código javascript para compilar
                                        'corejs': 3 //Librerias para generar código que no exista en versiones a transpilar e instalar core-js

                                    }
                                ]
                            ],
                            "plugins": [
                                [
                                    "module-resolver",//Alias a rutas
                                    {
                                        "root": ["./"],
                                        "alias":{
                                            "@client" : "./client",
                                        }
                                    } 
                                ]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/, //regla que buscará los archivos de css
                use: [MiniCssExtractPlugin.loader, 'css-loader'] //
                
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/app.css'
        }),
        new EslintWebpackPlugin()
    ]
}