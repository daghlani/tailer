# Use a lightweight Node.js image
# FROM docker.arvancloud.ir/node:alpine
FROM tailer:0.0.1

# Create and change to the app directory
WORKDIR /app

# Copy application code
COPY server.js ./
COPY public ./public

# Install express
#RUN npm install --verbose express

# Expose the application port
EXPOSE 3000

# Define the log file path
VOLUME /logs

# Start the application
CMD ["node", "server.js"]

