# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

COPY . .


# Install dependencies
RUN npm install

# Copy the rest of the application source code to the container
RUN npx prisma generate
    
# Expose the port on which your Node.js application runs (change this if needed)
EXPOSE 8080

# Command to start the Node.js application
CMD ["npm", "start"]