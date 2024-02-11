FROM node:lts-buster-slim
RUN chown -R node /usr/local/lib/node_modules

USER node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./

RUN npm install
COPY --chown=node:node . .

CMD ["npx", "ts-node","index.ts"]