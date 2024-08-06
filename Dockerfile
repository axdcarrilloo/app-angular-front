FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:alpine
COPY --from=build /app/dist/app-angular-front /usr/share/nginx/html
EXPOSE 2021
CMD ["nginx", "-g", "daemon off;"]
