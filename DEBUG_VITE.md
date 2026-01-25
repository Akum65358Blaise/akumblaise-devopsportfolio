# Debug Vite Server Issues

## Step 1: Check PM2 Status
```bash
pm2 status
pm2 logs akumblaise-portfolio --lines 100
```

## Step 2: Check if Process is Crashing
```bash
# Check PM2 error logs
pm2 logs akumblaise-portfolio --err --lines 100

# Check system resources
free -h
df -h
```

## Step 3: Try Running Vite Manually
```bash
# Stop PM2
pm2 stop akumblaise-portfolio

# Run Vite directly to see errors
cd /var/www/akumblaise-devopsportfolio
npm run dev
```

## Step 4: Check if Port is in Use
```bash
# Check what's using port 5173
lsof -i :5173
# or
netstat -tulpn | grep 5173
```

## Step 5: Increase PM2 Memory if Needed
If Vite is crashing due to memory, update ecosystem.config.cjs:
```javascript
max_memory_restart: '2G', // Increase from 1G
```
