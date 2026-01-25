# Troubleshooting 502 Bad Gateway

## Step 1: Check if Vite is Running

```bash
# Check PM2 status
pm2 status

# Check if port 5173 is listening
netstat -tulpn | grep 5173
# or
ss -tulpn | grep 5173
```

## Step 2: Check PM2 Logs for Errors

```bash
# Check error logs
pm2 logs akumblaise-portfolio --err --lines 100

# Check all logs
pm2 logs akumblaise-portfolio --lines 100
```

## Step 3: Test Vite Locally

```bash
# Test if Vite responds
curl http://localhost:5173

# If it doesn't respond, Vite isn't running properly
```

## Step 4: Restart Vite Manually to See Errors

```bash
# Stop PM2 process
pm2 stop akumblaise-portfolio

# Run Vite manually to see errors
cd /var/www/akumblaise-devopsportfolio
npm run dev
```

## Step 5: Check Nginx Configuration

```bash
# Test Nginx config
sudo nginx -t

# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log
```

## Step 6: Verify Nginx Proxy Configuration

Make sure your Nginx config has:
```nginx
proxy_pass http://localhost:5173;
```

## Common Fixes:

### Fix 1: Restart PM2 with Update Env
```bash
pm2 restart akumblaise-portfolio --update-env
```

### Fix 2: Delete and Recreate PM2 Process
```bash
pm2 delete akumblaise-portfolio
pm2 start ecosystem.config.cjs
pm2 save
```

### Fix 3: Check if Node/npm is in PATH for PM2
```bash
which node
which npm
# Make sure PM2 can find these
```
