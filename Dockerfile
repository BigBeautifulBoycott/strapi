FROM node:20-bullseye-slim AS build
WORKDIR /app

COPY bigly-strapi/package*.json ./
RUN npm ci --omit=dev

COPY bigly-strapi/. .

ENV NODE_ENV=production
RUN npm run build

USER node

EXPOSE 1337
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=5 \
  CMD node -e "require('http').get('http://127.0.0.1:1337/_health',res=>{if(res.statusCode!==204)process.exit(1)}).on('error',()=>process.exit(1))"

CMD ["npm", "run", "start"]
