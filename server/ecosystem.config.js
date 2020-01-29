module.exports = {
  apps : [{
    name: 'Personal-Site',
    script: 'src/index.js',
    autorestart: true,
    watch: false,
    env: {
      PORT: 3000,
      NODE_ENV: "production",
    },
  }],
};
