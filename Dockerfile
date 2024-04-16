FROM node:14.1-alpine AS builder

ARG profile

WORKDIR /usr/ui/

COPY . /usr/ui/

COPY ./config/nginx.conf /etc/nginx/nginx.conf

FROM nginx:alpine

RUN apk --no-cache add curl bash

## Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /etc/nginx/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY --from=builder  /usr/ui/dist/ .

CMD ["nginx", "-g", "daemon off;"]
