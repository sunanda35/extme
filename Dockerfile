FROM node:alpine
WORKDIR /usr/src/extme-backend

COPY package*.json ./

RUN npm ci
COPY . .
ARG PORT
ENV PORT 4000 

EXPOSE ${PORT}

CMD ["npm", "start"]
