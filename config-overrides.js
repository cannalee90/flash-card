const webpack = require('webpack');

module.exports = (config, env) => {
  const processENV = new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
      'FLASHCARD_DEV_SECRET': JSON.stringify(process.env.FLASHCARD_DEV_SECRET),
    },
  })
  config.plugins.push(processENV);
  return config;
}