FROM node:13.12.0-alpine
# Create app directory
WORKDIR /usr/src/app
#
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .
EXPOSE 3000
# CMD [ "node", "server.js" ]
# start app
CMD ["npm", "start"]

# # pull official base image
# FROM node:13.12.0-alpine
# # set working directory
# WORKDIR /app
# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# # RUN npm install react-scripts@3.4.1 -g --silent
# # add app
# COPY . ./
# EXPOSE 3002
# # start app
# CMD ["npm", "start"]