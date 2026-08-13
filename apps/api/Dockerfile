FROM node:22-alpine
WORKDIR /app

# ferramentas de build necessárias para compilar o binding nativo do better-sqlite3
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx prisma generate

ENV NODE_ENV=production
EXPOSE 4000

CMD ["sh", "-c", "npx prisma migrate deploy && npx ts-node src/server.ts"]