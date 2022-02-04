FROM node:alpine
WORKDIR /usr/src/extme-backend

COPY package*.json ./

RUN npm ci
RUN npm run build
COPY . .


EXPOSE 4000

CMD ["npm", "start"]
