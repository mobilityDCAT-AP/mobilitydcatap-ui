FROM node:22 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build-only

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html/mobilitydcatap-ui/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
