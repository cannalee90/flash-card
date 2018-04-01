const webpack = require('webpack');

module.exports = (config, env) => {
  const processENV = new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
      'FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FirebaseMessagingSenderId),
      'FIREBASE_API_KEY': JSON.stringify(process.env.FirebaseApiKey),
      'FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FirebaseAuthDomain),
      'FIREBASE_DATABASE_URL': JSON.stringify(process.env.FirebaseDatabaseURL),
      'FIREBASE_PROJECT_ID': JSON.stringify(process.env.FirebaseProjectId),
      'FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FirebaseStorageBucket),
    },    
  });
  config.plugins.push(processENV);
  return config;
}