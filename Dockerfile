FROM node:20

WORKDIR /app

# Copy package files first for better Docker caching
COPY package*.json ./

# (Optional, not needed if .dockerignore excludes node_modules & package-lock.json, but included for your request)
RUN rm -rf node_modules package-lock.json

# Install dependencies
RUN npm install

# Now copy the rest of your app source code
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
