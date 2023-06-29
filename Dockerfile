FROM node:18-alpine3.17 as build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY  /app/dist /usr/share/nginx/html
EXPOSE 80:80
