FROM node:10.16.3-alpine AS build

WORKDIR /app

RUN apk --no-cache add --virtual builds-deps build-base g++ make python && \
npm install --quiet -g node-gyp node-pre-gyp

# Install packages only if package.json changed
COPY package.json /app

RUN npm install

COPY . /app

FROM node:10.16.3-alpine

COPY --from=build /app /app

CMD ["npm", "start"]
