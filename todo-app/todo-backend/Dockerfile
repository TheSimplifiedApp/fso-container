FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

# RUN npm install

RUN npm ci 

USER node

ENV DEBUG=todo-backend:*

CMD ["npm", "start"]