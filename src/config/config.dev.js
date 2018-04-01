const config = {
  githubAuth: {
    callback: 'http://localhost:3000/callback',
    clientId: 'b1497163e82bf1dfd9c1',
    clientSecret: process.env.FLASHCARD_DEV_SECRET,
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