# 🐳 Docker Setup & Deployment Guide for bbuilds

## ✅ Pre-flight Checklist

All required files are in place:

- ✅ `Dockerfile` - Multi-stage build configuration
- ✅ `next.config.ts` - Configured with `output: 'standalone'`
- ✅ `.dockerignore` - Optimized to exclude unnecessary files
- ✅ Local build works (`npm run build` successful)

---

## 🚀 Quick Start Commands

### 1. Build the Docker Image
```bash
docker build -t bbuilds-web .
```

### 2. Run the Container
```bash
docker run -p 3000:3000 --name bbuilds-app bbuilds-web
```

### 3. Access Your Site
Open http://localhost:3000 in your browser

---

## 🔄 Development Workflow

### When You Make Code Changes:

**Option 1: Quick Rebuild & Restart**
```bash
docker build -t bbuilds-web . && docker rm -f bbuilds-app && docker run -p 3000:3000 --name bbuilds-app bbuilds-web
```

**Option 2: Step by Step**
```bash
# 1. Rebuild the image
docker build -t bbuilds-web .

# 2. Stop and remove old container
docker rm -f bbuilds-app

# 3. Start new container
docker run -p 3000:3000 --name bbuilds-app bbuilds-web
```

---

## 🛠️ Useful Docker Commands

### Container Management
```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# View container logs
docker logs bbuilds-app

# Follow logs in real-time
docker logs -f bbuilds-app

# Stop container
docker stop bbuilds-app

# Start existing container
docker start bbuilds-app

# Remove container
docker rm bbuilds-app

# Remove container (force)
docker rm -f bbuilds-app
```

### Image Management
```bash
# List images
docker images

# Remove image
docker rmi bbuilds-web

# Remove unused images
docker image prune
```

### Clean Up Everything
```bash
# Remove all stopped containers
docker container prune

# Remove all unused images, networks, and build cache
docker system prune -a
```

---

## 🐙 Docker Compose (Optional)

Create `docker-compose.yml` for easier management:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Then use:
```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```

---

## 📦 Production Deployment

### Deploy to Cloud Platforms:

**Vercel (Recommended for Next.js)**
```bash
vercel --prod
```

**AWS ECS/Fargate**
```bash
# Push to ECR
docker tag bbuilds-web:latest <account-id>.dkr.ecr.<region>.amazonaws.com/bbuilds-web:latest
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/bbuilds-web:latest
```

**Google Cloud Run**
```bash
gcloud run deploy bbuilds --source . --region us-central1
```

**DigitalOcean App Platform**
```bash
doctl apps create --spec .do/app.yaml
```

---

## 🔍 Troubleshooting

### Docker Not Found
```bash
# Install Docker Desktop from:
# https://www.docker.com/products/docker-desktop
```

### Build Fails
```bash
# Check local build first
npm run build

# Clear Next.js cache
rm -rf .next

# Clear Docker cache
docker builder prune
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process or use a different port
docker run -p 3001:3000 --name bbuilds-app bbuilds-web
```

### Container Crashes
```bash
# Check logs
docker logs bbuilds-app

# Run in interactive mode for debugging
docker run -it -p 3000:3000 bbuilds-web sh
```

---

## 📊 Verify Your Setup

Run these checks before building:

```bash
# 1. Verify Dockerfile exists
ls -la Dockerfile

# 2. Verify next.config.ts has standalone output
cat next.config.ts | grep standalone

# 3. Verify .dockerignore exists
ls -la .dockerignore

# 4. Test local build
npm run build

# 5. Check for standalone output
ls -la .next/standalone
```

---

## 🎯 Next Steps

1. **Install Docker Desktop** if not already installed
2. **Build the image**: `docker build -t bbuilds-web .`
3. **Run the container**: `docker run -p 3000:3000 --name bbuilds-app bbuilds-web`
4. **Visit**: http://localhost:3000

---

## 📚 Resources

- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [Docker Desktop Download](https://www.docker.com/products/docker-desktop)
- [Next.js Standalone Output](https://nextjs.org/docs/app/api-reference/config/next-config-js/output)
