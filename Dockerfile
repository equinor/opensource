FROM bitnami/nginx:latest

WORKDIR /app
COPY /www /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
