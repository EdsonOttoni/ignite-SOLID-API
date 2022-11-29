FROM node:16.15.0

WORKDIR /usr/app

COPY package.json ./

RUN rm -rf node_modules

RUN npm install

# Copiando surce
COPY . .

#inicializado prisma
RUN npx prisma generate

EXPOSE 3333

CMD ["npm", "run", "dev"]