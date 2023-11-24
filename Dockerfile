FROM node:18.18 AS build

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /var/www/app/
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]

#pruebaaaaa