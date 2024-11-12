# Use Alpine Linux as a lightweight base image
FROM alpine:3.16

# Set working directory
WORKDIR /app

# Copy the PocketBase binary and start.sh script into the container
COPY pocketbase ./
COPY start.sh ./

# Expose the port PocketBase will run on
EXPOSE 8080

# Run the start.sh script
CMD ["./start.sh"]
