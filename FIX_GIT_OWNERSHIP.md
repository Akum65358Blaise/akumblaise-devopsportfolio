# Fix Git Dubious Ownership Error

## Quick Fix

Run this command on your VPS:

```bash
git config --global --add safe.directory /var/www/akumblaise-devopsportfolio
```

## Alternative Solutions

### Option 1: Add to safe.directory (Recommended)
```bash
git config --global --add safe.directory /var/www/akumblaise-devopsportfolio
```

### Option 2: Fix Ownership
If you want the repository owned by root:
```bash
sudo chown -R root:root /var/www/akumblaise-devopsportfolio
```

### Option 3: Fix Ownership for www-data (if you want www-data to own it)
```bash
sudo chown -R www-data:www-data /var/www/akumblaise-devopsportfolio
# Then add to safe.directory as www-data user
sudo -u www-data git config --global --add safe.directory /var/www/akumblaise-devopsportfolio
```

## Verify Fix

After running the command, try:
```bash
git pull
```

If it still doesn't work, you might need to check the actual owner:
```bash
ls -la /var/www/akumblaise-devopsportfolio
```
