#React app image
FROM node:lts-alpine as build

RUN apk add build-base

RUN apk add --no-cache python3 py3-pip
# RUN apk add --no-cache make

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:latest as prod

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]