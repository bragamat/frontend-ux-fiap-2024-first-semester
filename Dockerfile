# Use the official Node.js runtime as the base image
FROM node:18 as build

ARG NODE_ENV="production"
ARG VITE_CONTENTFUL_SPACE_KEY
ARG VITE_CONTENTFUL_ACCESS_TOKEN
ARG VITE_CONTENTFUL_ENTRY

ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT

ENV VITE_CONTENTFUL_SPACE_KEY=$VITE_CONTENTFUL_SPACE_KEY
ENV VITE_CONTENTFUL_ACCESS_TOKEN=$VITE_CONTENTFUL_ACCESS_TOKEN
ENV VITE_CONTENTFUL_ENTRY=$VITE_CONTENTFUL_ENTRY

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
RUN npm install -g npm && npm install

# Copy the entire application code to the container
COPY . .

# Install dependencies
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# COPY --from=build /app/dist /site

# Keep original nginx config
RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf_orig
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the Nginx server
EXPOSE 80
EXPOSE $PORT

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
