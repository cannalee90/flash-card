const config = {
  githubAuth: {
    callback: 'http://localhost:3000/callback',
    clientId: 'b1497163e82bf1dfd9c1',
    clientSecret: process.env.FLASHCARD_DEV_SECRET,
  },
};

export default config;