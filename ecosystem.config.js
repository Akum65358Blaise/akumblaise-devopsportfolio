module.exports = {
  apps: [{
    name: 'akumblaise-portfolio',
    script: 'npm',
    args: 'run dev',
    cwd: '/var/www/akumblaise-devopsportfolio',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      HOST: '0.0.0.0',
      PORT: 5173
    }
  }]
};
