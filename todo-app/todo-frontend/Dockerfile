FROM node:16 AS test

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN CI=true npm run test

ENV REACT_APP_BACKEND_URL=http://localhost:8080/api/
RUN npm run build

# RUN npm install -g serve

# CMD ["serve", "build"]

FROM nginx:1.20-alpine

COPY --from=test /usr/src/app/build /usr/share/nginx/html



# docker build . -t todo-frontend-nginx    
# docker run -p 8080:80 todo-frontend-nginx
