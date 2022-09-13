FROM node:16

# Create app directory
WORKDIR /UNcademy_search_ms


COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]