FROM node:20-bullseye-slim AS build
WORKDIR /app

COPY bigly-strapi/package*.json ./
RUN npm ci --omit=dev

COPY bigly-strapi/. .

ENV NODE_ENV=production
RUN npm run build

USER root
RUN apt-get update && \
    apt-get install -y --no-install-recommends curl ca-certificates gnupg && \
    curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor -o /usr/share/keyrings/postgres.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/postgres.gpg] http://apt.postgresql.org/pub/repos/apt bullseye-pgdg main" > /etc/apt/sources.list.d/pgdg.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends postgresql-client-16 && \
    rm -rf /var/lib/apt/lists/*

ENV PG_DUMP_PATH=/usr/lib/postgresql/16/bin/pg_dump

USER node

EXPOSE 1337
HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=5 \
  CMD curl -sf http://127.0.0.1:1337/health | grep -q '"message":"OK"' || exit 1

CMD ["npm", "run", "start"]
