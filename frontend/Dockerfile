FROM node:16-alpine

RUN npm add -g npm

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/

RUN npm install --force

COPY . /app

RUN npm run build

EXPOSE 3000

CMD ["npm","preview"]