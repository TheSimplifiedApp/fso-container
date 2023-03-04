FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV MONGODB_URI=mongodb+srv://fullstackopen:adidas@fso.4arxnks.mongodb.net/phonebookApp?retryWrites=true&w=majority
ENV PORT = 3001

CMD ["npm", "run", "dev"]