FROM node:22-alpine

ENV TZ="Europe/Helsinki"

WORKDIR /usr/src/app

COPY package* ./
RUN npm i

EXPOSE 3000

CMD ["node_modules/.bin/tsx", "watch", "--clear-screen=false", "src/index.ts"]
