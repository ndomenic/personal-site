module.exports = {
  apps : [{
    name: 'Personal-Site',
    script: 'src/index.js',
    autorestart: true,
    watch: false,
    env: {
      PORT: 80,
      NODE_ENV: "production",
    },
  }],
};
