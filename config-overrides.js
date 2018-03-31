const webpack = require('webpack');

module.exports = (config, env) => {
  console.log(config);
  const processENV = new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
      'test_env': JSON.stringify('ppp'),
    },
    'process.FLASHCARD_DEV_SECRET': JSON.stringify(process.env.FLASHCARD_DEV_SECRET),
  })
  config.plugins.push(processENV);
  return config;
}