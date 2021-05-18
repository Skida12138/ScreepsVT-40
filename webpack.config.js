const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  target: 'node',
  output: {
    filename: 'main.js',
    path: path.resolve('./dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve('./tsconfig.json'),
            },
          },
        ], 
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
};