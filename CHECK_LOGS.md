# Check Logs for 502 Error

## Step 1: Check nohup Logs
```bash
# If you used nohup, check the log file
tail -50 /var/log/vite.log
# or if you used nohup without specifying a file
tail -50 nohup.out
```

## Step 2: Check Nginx Error Logs
```bash
# Check recent Nginx errors
sudo tail -50 /var/log/nginx/error.log

# Follow Nginx errors in real-time
sudo tail -f /var/log/nginx/error.log
```

## Step 3: Check if Vite Process is Running
```bash
# Check if vite is running
ps aux | grep vite
ps aux | grep "npm run dev"

# Check if port 5173 is listening
netstat -tulpn | grep 5173
# or
ss -tulpn | grep 5173
```

## Step 4: Test Local Connection
```bash
# Test if Vite responds locally
curl -v http://localhost:5173

# Check what's actually running
lsof -i :5173
```

## Step 5: Check Nginx Access Logs
```bash
# See recent requests
sudo tail -50 /var/log/nginx/access.log
```
