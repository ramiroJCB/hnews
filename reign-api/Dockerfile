FROM node:14-slim
ENV NODE_ENV production
WORKDIR /usr/src/main


COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
COPY . .

EXPOSE 5000
CMD ["yarn", "run", "start:dev"]


