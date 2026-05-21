FROM node:20-alpine

ENV TZ="Europe/Helsinki"

WORKDIR /usr/src/app
RUN curl -fsSL https://github.com/AikidoSec/safe-chain/releases/latest/download/install-safe-chain.sh | sh -s -- --ci
COPY package* ./
RUN npm i

EXPOSE 3000

CMD ["node_modules/.bin/tsx", "watch", "--clear-screen=false", "src/index.ts"]
