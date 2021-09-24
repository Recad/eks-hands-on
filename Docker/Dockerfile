#Imagen Base
FROM node:10.7.0

WORKDIR /usr/src/app
COPY ./express.js-example-master/ /usr/src/app/

RUN rm -rf /node_modules
RUN npm install

EXPOSE 3000

CMD [ "node", "server" ]
