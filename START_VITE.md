# Start Vite Dev Server - Troubleshooting

## Check Why It Failed

```bash
# Check the error log
tail -50 /var/log/vite.log

# Check if esbuild is the issue
ls -la node_modules/@esbuild/ 2>/dev/null
```

## Fix and Start

```bash
# 1. Use ss instead of netstat
ss -tulpn | grep 5173

# 2. Check what's in the log
tail -50 /var/log/vite.log

# 3. If esbuild error, reinstall:
cd /var/www/akumblaise-devopsportfolio
rm -rf node_modules package-lock.json
npm install

# 4. Start again
nohup npm run dev > /var/log/vite.log 2>&1 &

# 5. Wait and check
sleep 5
ps aux | grep vite
ss -tulpn | grep 5173
curl http://localhost:5173
```
