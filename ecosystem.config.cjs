module.exports = {
  apps: [{
    name: 'akumblaise-portfolio',
    script: 'npm',
    args: 'run dev',
    cwd: '/var/www/akumblaise-devopsportfolio',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '2G',
    interpreter: 'none',
    env: {
      NODE_ENV: 'development',
      HOST: '0.0.0.0',
      PORT: 5173
    },
    error_file: '/var/log/pm2/akumblaise-portfolio-error.log',
    out_file: '/var/log/pm2/akumblaise-portfolio-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }]
};
