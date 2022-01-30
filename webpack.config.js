module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: '/src/index.js',
    output: {
      path: __dirname,
      filename: 'public/bundle.js',
      publicPath: '/src',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  };