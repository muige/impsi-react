# Serving with Caddy

This project includes Caddy configurations for both production and development environments.

## Prerequisites

- Caddy installed and available in your PATH
- Node.js and npm installed

## Configuration Files

- `Caddyfile` - Production configuration (serves static files from `dist/`)
- `Caddyfile.dev` - Development configuration (proxies to Vite dev server)

## Usage

### Production Mode

Serves the built application from the `dist/` directory on `http://localhost:8080`.

```bash
# Build the application
npm run build

# Start Caddy with production config
caddy run --config Caddyfile

# Or use the npm script
npm run caddy:prod
```

**Features:**
- Serves static files from `dist/`
- SPA routing (all routes fall back to `index.html`)
- Gzip compression
- Asset caching with proper headers
- Request logging to `access.log`

**Background mode:**
```bash
# Start in background
caddy start --config Caddyfile

# Stop background process
caddy stop
```

### Development Mode

Proxies requests to the Vite dev server on `http://localhost:3000`.

```bash
# Terminal 1: Start Vite dev server
npm run dev

# Terminal 2: Start Caddy proxy
caddy run --config Caddyfile.dev

# Or use the npm script (Terminal 2)
npm run caddy:dev
```

**Features:**
- Proxies to Vite dev server (port 5173)
- WebSocket support for Hot Module Reload (HMR)
- Request logging to `access-dev.log`

**Why use the dev proxy?**
- Test with Caddy features during development
- Match production environment more closely
- Add custom headers or middleware

### Quick Start

```bash
# Development (just Vite)
npm run dev

# Development (with Caddy proxy)
npm run dev        # Terminal 1
npm run caddy:dev  # Terminal 2

# Production
npm run caddy:prod
```

## Switching to Custom Domain

To use a custom domain instead of localhost:

1. **Edit the Caddyfile** (production or `Caddyfile.dev` for development)
   - Uncomment the domain example section
   - Replace `myapp.com` with your actual domain
   - Comment out or remove the `localhost` section

2. **Set up DNS**
   - Point your domain's A record to your server's IP address
   - For local development domains (e.g., `myapp.local`), add an entry to `/etc/hosts`

3. **Restart Caddy**
   ```bash
   caddy stop
   caddy run --config Caddyfile
   ```

**HTTPS:** Caddy automatically obtains and renews SSL certificates from Let's Encrypt when using a public domain.

### Example Custom Domain Configuration

```caddy
myapp.com {
    root * dist
    file_server
    encode gzip
    log {
        output file access.log
        format console
    }
    try_files {path} /index.html
    header /assets/* Cache-Control "public, max-age=31536000, immutable"
}
```

## Logs

- `access.log` - Production request logs
- `access-dev.log` - Development proxy request logs

Both log files are automatically ignored by git (covered by `*.log` in `.gitignore`).

## Troubleshooting

### Port Already in Use

If you get a "port already in use" error:

```bash
# Check what's using the port
lsof -i :8080  # or :3000 for dev

# Kill the process or change the port in Caddyfile
```

### Dist Directory Not Found

Make sure you've built the project before running production mode:
```bash
npm run build
```

### Vite Dev Server Not Running

For development mode, ensure Vite is running on port 5173:
```bash
npm run dev
```

### Changes Not Reflecting

- **Production:** Rebuild the app (`npm run build`) and restart Caddy
- **Development:** Check that HMR is working in the Vite dev server

### Custom Domain Not Working

- Verify DNS is properly configured
- Check that port 80/443 are accessible (may require sudo)
- Review Caddy logs for errors: `caddy run --config Caddyfile` (shows errors in console)

## Additional Resources

- [Caddy Documentation](https://caddyserver.com/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Caddyfile Concepts](https://caddyserver.com/docs/caddyfile/concepts)
