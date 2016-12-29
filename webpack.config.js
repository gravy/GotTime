var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/index.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      App: 'src/App.jsx',
      applicationStyles: 'src/styles/app.scss',
      Navigation: 'src/components/Navigation.jsx',
      Timer: 'src/components/Timer.jsx',
      Countdown: 'src/components/Countdown.jsx',
      Clock: 'src/components/Clock.jsx',
      CountdownForm: 'src/components/CountdownForm.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_componets)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
