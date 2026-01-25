# Deployment Guide for akumblaiseacha.com

## Prerequisites
- Domain: akumblaiseacha.com (already linked to server)
- Server: VPS with root/ssh access
- Repository: Already cloned to `/var/www/akumblaise-devopsportfolio`

## Step 1: Set Proper Permissions

```bash
# Navigate to project directory
cd /var/www/akumblaise-devopsportfolio

# Set ownership to www-data (or your web server user)
sudo chown -R www-data:www-data /var/www/akumblaise-devopsportfolio

# Set proper permissions
sudo chmod -R 755 /var/www/akumblaise-devopsportfolio

# Make sure node_modules and build directories have correct permissions
sudo chmod -R 755 node_modules 2>/dev/null || true
```

## Step 2: Install Node.js and npm (if not already installed)

```bash
# Check if Node.js is installed
node --version
npm --version

# If not installed, install Node.js 18.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

## Step 3: Install Dependencies

```bash
cd /var/www/akumblaise-devopsportfolio

# Install dependencies
npm install

# If you encounter permission issues, use sudo (not recommended for production)
# sudo npm install
```

## Step 4: Run Development Server (Using npm run dev)

```bash
cd /var/www/akumblaise-devopsportfolio

# Run development server (will run on port 5173 by default)
npm run dev

# Note: For production, you might want to use PM2 to keep it running
# See Step 10 for PM2 setup
```

## Step 5: Install and Configure Nginx

```bash
# Install Nginx (if not already installed)
sudo apt update
sudo apt install nginx -y

# Check Nginx status
sudo systemctl status nginx
```

## Step 6: Create Nginx Configuration

```bash
# Create Nginx configuration file
sudo nano /etc/nginx/sites-available/akumblaiseacha.com
```

Add the following configuration (for development server):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name akumblaiseacha.com www.akumblaiseacha.com;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy to Vite dev server
    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # WebSocket support for HMR
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
    }
}
```

Save and exit (Ctrl+X, then Y, then Enter)

## Step 7: Enable Nginx Site

```bash
# Create symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/akumblaiseacha.com /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# If test passes, reload Nginx
sudo systemctl reload nginx
```

## Step 8: Install SSL Certificate with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d akumblaiseacha.com -d www.akumblaiseacha.com

# Follow the prompts:
# - Enter your email address
# - Agree to terms
# - Choose whether to redirect HTTP to HTTPS (recommended: Yes)

# Test automatic renewal
sudo certbot renew --dry-run
```

## Step 9: Update Nginx Configuration for HTTPS (Certbot will do this automatically)

After Certbot runs, your Nginx config will be updated to include HTTPS. Verify it:

```bash
sudo cat /etc/nginx/sites-available/akumblaiseacha.com
```

## Step 10: Set Up PM2 to Keep Dev Server Running (Recommended)

Since we're using `npm run dev`, we need to keep the process running. PM2 is perfect for this:

```bash
# Install PM2 globally
sudo npm install -g pm2

# Create PM2 ecosystem file
cd /var/www/akumblaise-devopsportfolio
nano ecosystem.config.js
```

Add this content to `ecosystem.config.js`:

```javascript
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
```

Start the application with PM2:

```bash
# Start the dev server with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration to start on server reboot
pm2 save
pm2 startup

# Check status
pm2 status
pm2 logs akumblaise-portfolio
```

**PM2 Commands:**
- `pm2 restart akumblaise-portfolio` - Restart the app
- `pm2 stop akumblaise-portfolio` - Stop the app
- `pm2 logs akumblaise-portfolio` - View logs
- `pm2 monit` - Monitor resources

## Step 11: Verify Deployment

```bash
# Check Nginx status
sudo systemctl status nginx

# Check if site is accessible
curl -I http://akumblaiseacha.com
curl -I https://akumblaiseacha.com

# Check SSL certificate
sudo certbot certificates
```

## Step 12: Set Up Auto-Deployment (Optional)

Create a simple deployment script:

```bash
cd /var/www/akumblaise-devopsportfolio
nano deploy.sh
```

Add this content:

```bash
#!/bin/bash
cd /var/www/akumblaise-devopsportfolio
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
echo "Deployment completed!"
```

Make it executable:

```bash
chmod +x deploy.sh
```

## Troubleshooting

### If you get permission errors:
```bash
sudo chown -R $USER:$USER /var/www/akumblaise-devopsportfolio
```

### If Nginx test fails:
```bash
sudo nginx -t
# Check the error message and fix the configuration
```

### If site doesn't load:
```bash
# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check if port 80/443 is open
sudo ufw status
sudo ufw allow 'Nginx Full'
```

### If SSL certificate fails:
```bash
# Make sure DNS is pointing to your server
dig akumblaiseacha.com

# Check if ports 80 and 443 are open
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

## Environment Variables

If you need environment variables, create a `.env` file:

```bash
cd /var/www/akumblaise-devopsportfolio
nano .env
```

Add your variables:
```
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
VITE_BEHIIV_API_KEY=your_key_here
VITE_BEHIIV_PUBLICATION_ID=your_id_here
```

Then rebuild:
```bash
npm run build
sudo systemctl reload nginx
```

## Maintenance Commands

```bash
# Restart dev server after changes (if using PM2)
pm2 restart akumblaise-portfolio

# Or manually restart
cd /var/www/akumblaise-devopsportfolio
npm run dev

# Check Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Check PM2 logs
pm2 logs akumblaise-portfolio

# Renew SSL certificate (automatic, but you can test)
sudo certbot renew
```
