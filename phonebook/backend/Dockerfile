FROM node:16
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

ENV MONGODB_URI=mongodb+srv://fullstackopen:adidas@fso.4arxnks.mongodb.net/phonebookApp?retryWrites=true&w=majority
ENV PORT = 3001

ENV NODE_ENV=production
  
USER node

CMD ["npm", "start"]