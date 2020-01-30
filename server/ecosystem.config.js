module.exports = {
  apps : [{
    name: 'Personal-Site',
    script: 'src/index.js',
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: "production",
    },
  }],
};
