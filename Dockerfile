FROM node:16.17.1

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 9000

CMD ["npm", "start"]
