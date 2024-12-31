# Use the official Node.js 18 image as the base image
FROM node:18
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code to the working directory
COPY . .
# Build the Next.js application
RUN npm run build
# Expose the port the app runs on
EXPOSE 3001
# Start the Next.js application
CMD ["npm", "run", "dev", "--", "-p", "3001"]