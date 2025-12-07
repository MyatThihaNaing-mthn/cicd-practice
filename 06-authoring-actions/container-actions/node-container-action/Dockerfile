FROM alpine:3.22
RUN apk add --no-cache nodejs-current
ENV NODE_VERSION=25.2.1

WORKDIR /usr/app

COPY entrypoint.js  /entrypoint.js
ENTRYPOINT ["node", "/entrypoint.js"]

