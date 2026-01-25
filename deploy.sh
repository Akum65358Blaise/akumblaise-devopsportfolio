#!/bin/bash

# Deployment script for akumblaiseacha.com
# Run this script from /var/www/akumblaise-devopsportfolio

set -e  # Exit on error

echo "🚀 Starting deployment for akumblaiseacha.com..."

# Step 1: Set permissions
echo "📁 Setting permissions..."
sudo chown -R www-data:www-data /var/www/akumblaise-devopsportfolio
sudo chmod -R 755 /var/www/akumblaise-devopsportfolio

# Step 2: Check Node.js
echo "🔍 Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Step 3: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 4: Start development server with PM2
echo "📦 Installing PM2..."
sudo npm install -g pm2

echo "🚀 Starting development server with PM2..."
# Stop if already running
pm2 stop akumblaise-portfolio 2>/dev/null || true
pm2 delete akumblaise-portfolio 2>/dev/null || true

# Start with PM2
pm2 start ecosystem.config.js
pm2 save

echo "✅ Development server started!"

# Step 6: Install Nginx if not installed
if ! command -v nginx &> /dev/null; then
    echo "📦 Installing Nginx..."
    sudo apt update
    sudo apt install nginx -y
fi

# Step 7: Create Nginx configuration (proxy to dev server)
echo "⚙️  Configuring Nginx..."
sudo tee /etc/nginx/sites-available/akumblaiseacha.com > /dev/null <<EOF
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
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        
        # WebSocket support for HMR
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
    }
}
EOF

# Step 8: Enable site
echo "🔗 Enabling Nginx site..."
sudo ln -sf /etc/nginx/sites-available/akumblaiseacha.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Step 9: Test and reload Nginx
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid!"
    sudo systemctl reload nginx
    echo "✅ Nginx reloaded successfully!"
else
    echo "❌ Nginx configuration test failed!"
    exit 1
fi

# Step 10: Install SSL with Certbot
echo "🔒 Setting up SSL certificate..."
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing Certbot..."
    sudo apt install certbot python3-certbot-nginx -y
fi

echo "📝 Obtaining SSL certificate..."
echo "⚠️  You will be prompted for:"
echo "   - Email address"
echo "   - Agreement to terms"
echo "   - Redirect HTTP to HTTPS (recommended: Yes)"
echo ""
read -p "Press Enter to continue with SSL setup..."

sudo certbot --nginx -d akumblaiseacha.com -d www.akumblaiseacha.com

# Step 11: Test SSL renewal
echo "🔄 Testing SSL auto-renewal..."
sudo certbot renew --dry-run

echo ""
echo "✅ Deployment completed successfully!"
echo ""
echo "🌐 Your site should now be live at:"
echo "   http://akumblaiseacha.com"
echo "   https://akumblaiseacha.com"
echo ""
echo "📊 Check status with:"
echo "   sudo systemctl status nginx"
echo "   sudo certbot certificates"
echo ""
