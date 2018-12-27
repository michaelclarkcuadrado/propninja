# build frontend, copy to static folder
FROM node:latest as webpack-builder

WORKDIR /tmp
#cache npm pull
COPY src/frontend/package*.json ./frontend/
WORKDIR frontend
RUN npm install
COPY src/frontend/ ./
ENV node_env production
RUN npx webpack


# create Node/Express server with api and static assets
FROM node:latest
WORKDIR /usr/src/app
#cache npm pull
COPY src/backend/package*.json ./
RUN npm install
#copy frontend in to static assets
COPY --from=webpack-builder /tmp/frontend/dist/* ./static/
#copy API files
COPY src/backend/ ./

ENV node_env production
CMD ["npm", "start"]