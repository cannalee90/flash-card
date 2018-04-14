const config = {
  githubGist: {
    baseURL: 'https://api.github.com',
    gistURL: 'ea178d763c72b03dcee8ee4fa0dc03ae',
  },
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    messageSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  }
};

export default config;