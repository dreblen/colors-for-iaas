FROM node:6.9.1-alpine

# Make a home for our application files
RUN mkdir -p /usr/src/appfiles
WORKDIR /usr/src/appfiles

# Install modules
COPY package.json .
RUN npm install

# Set up app files
COPY . .

# Set up running hooks
EXPOSE 3000
CMD ["npm", "start"]
