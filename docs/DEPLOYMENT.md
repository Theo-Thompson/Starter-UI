# Deployment Guide

This guide explains how to deploy the built application to any hosting platform.

## Build Process

First, build the application for production:

```bash
npm run build
```

This creates a `dist/` directory containing optimized static files:
- `index.html` - Main HTML file
- `assets/` - Optimized CSS, JavaScript, and other assets
- Source maps (for debugging)

## Deployment Options

### Static File Hosting

The built application consists of static files that can be deployed to any static hosting service:

#### Apache Server
1. Upload the contents of `dist/` to your web server's document root
2. Ensure your `.htaccess` file includes:
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

#### Nginx Server
1. Upload the contents of `dist/` to your web server directory
2. Configure your nginx server block:
   ```nginx
   location / {
       try_files $uri $uri/ /index.html;
   }
   ```

#### Cloud Storage (AWS S3, Google Cloud Storage, etc.)
1. Upload all files from `dist/` to your storage bucket
2. Configure the bucket for static website hosting
3. Set the index document to `index.html`
4. Configure error pages to redirect to `index.html` for SPA routing

### Content Delivery Networks (CDN)

Deploy to CDN services for better performance:

- **Cloudflare Pages** - Upload `dist/` contents
- **AWS CloudFront** - Point to S3 bucket or custom origin
- **Google Cloud CDN** - Point to Cloud Storage bucket
- **Azure CDN** - Point to Blob Storage container

### Custom Server

For custom server deployments:

1. Build the application: `npm run build`
2. Copy the `dist/` contents to your server
3. Configure your server to serve static files
4. Set up proper routing for the SPA (all routes should serve `index.html`)

## Environment Configuration

### Environment Variables

If your application uses environment variables:

1. Create a `.env.production` file with production values
2. Rebuild the application: `npm run build`
3. The environment variables will be embedded in the build

### API Endpoints

Update API endpoints for production:

1. Set the correct API base URL in your environment variables
2. Ensure CORS is properly configured on your API server
3. Rebuild the application with the new configuration

## Security Considerations

### Security Headers

Consider adding these security headers to your server configuration:

```http
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'
```

### HTTPS

Always serve your application over HTTPS in production:
- Obtain an SSL certificate (Let's Encrypt, etc.)
- Configure your server to redirect HTTP to HTTPS
- Update any hardcoded HTTP URLs to use HTTPS

## Performance Optimization

### Compression

Enable gzip compression on your server:
- Apache: Use `mod_deflate`
- Nginx: Enable `gzip` module
- CDN: Most CDNs provide automatic compression

### Caching

Configure proper caching headers:
- Static assets: `Cache-Control: public, max-age=31536000, immutable`
- HTML files: `Cache-Control: no-cache` (for SPA updates)

### CDN Configuration

If using a CDN:
- Configure edge caching rules
- Set up proper cache invalidation for deployments
- Enable compression and optimization features

## Monitoring and Analytics

### Error Tracking

Consider adding error tracking:
- Sentry
- LogRocket
- Bugsnag

### Analytics

Add analytics to track usage:
- Google Analytics
- Plausible Analytics
- Simple Analytics

## Deployment Checklist

Before deploying to production:

- [ ] Run `npm run validate` to ensure all checks pass
- [ ] Test the production build locally: `npm run preview`
- [ ] Verify all environment variables are set correctly
- [ ] Check that API endpoints are accessible
- [ ] Test the application in different browsers
- [ ] Verify that routing works correctly
- [ ] Check that all assets load properly
- [ ] Test on mobile devices
- [ ] Verify HTTPS is working
- [ ] Check security headers are in place

## Troubleshooting

### Common Issues

**404 errors on page refresh**
- Ensure your server is configured for SPA routing
- All routes should serve `index.html`

**Assets not loading**
- Check that the `dist/` directory structure is preserved
- Verify file permissions on the server

**API calls failing**
- Check CORS configuration on your API server
- Verify API endpoints are accessible from your domain

**Build errors**
- Run `npm run validate` to check for issues
- Ensure all dependencies are installed: `npm install`

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Verify server logs for any issues
3. Test the build locally with `npm run preview`
4. Check the [Troubleshooting section](../README.md#troubleshooting) in the main README

---

For more information about the project structure and configuration, see the main [README.md](../README.md). 