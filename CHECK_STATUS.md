# Check if Vite Dev Server is Working

## Commands to Run on VPS:

### 1. Check PM2 Status
```bash
pm2 status
```

### 2. Check Detailed Logs
```bash
pm2 logs akumblaise-portfolio --lines 50
```

### 3. Check if Port 5173 is Listening
```bash
netstat -tulpn | grep 5173
# or
ss -tulpn | grep 5173
```

### 4. Test Local Connection
```bash
curl http://localhost:5173
```

### 5. Check Nginx Status
```bash
sudo systemctl status nginx
sudo nginx -t
```

### 6. Test Through Nginx
```bash
curl -I http://akumblaiseacha.com
curl -I https://akumblaiseacha.com
```

### 7. If Vite isn't starting, check for errors:
```bash
pm2 logs akumblaise-portfolio --err --lines 100
```

### 8. Restart with more verbose output
```bash
pm2 restart akumblaise-portfolio --update-env
pm2 logs akumblaise-portfolio --lines 100
```
