# ONLINE COMPILER
This project is a full-stack web application built using the MERN stack, called Online Compiler.

After authentication, users can enter C++ code and input to get the output for the code.

## Running the Application on Your System
To run the application in your web browser, follow these steps:

### 1. Install Docker Desktop
You need to have Docker Desktop installed to run the application in a container. You can download and install Docker Desktop from the official documentation:

[Install Docker Desktop](https://docs.docker.com/engine/install/)

### 2. Pull and Run the Docker Image
Once Docker Desktop is installed and running, open your terminal or command prompt and execute the following commands:

```docker pull chaitanyakrt/onlinecompiler:1.1.2```

This will pull the latest version of the Online Compiler image from Docker Hub.

```docker run -d -p 3000:3000 chaitanyakrt/onlinecompiler:1.1.2```

This command will:

Start the container in detached mode (-d).
Map the container's port 3000 to your local machine's port 3000 (-p 3000:3000).
3. Access the Application
Once the container is running, you can access the Online Compiler in your web browser at:

http://localhost:3000

#### Notes
Ensure Docker Desktop is running before executing the commands.
If port 3000 is already in use, you can map the container's port to a different port on your local machine by modifying the run command (e.g., -p 8080:3000).
