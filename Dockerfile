FROM node:25.7

WORKDIR /app

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "dev"]
