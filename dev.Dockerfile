FROM node:24-alpine

ENV TZ="Europe/Helsinki"

WORKDIR /usr/src/app
COPY package* ./
COPY .npmrc ./
RUN npm ci

EXPOSE 3000

CMD ["node_modules/.bin/tsx", "watch", "--clear-screen=false", "src/index.ts"]
