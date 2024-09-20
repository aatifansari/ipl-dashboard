<!-- IPL DASHBOARD UI -->

[![LinkedIn][linkedin-shield]][linkedin-url]

<h1 align = "center"> IPL DashBoard UI</h1>

<!-- ABOUT THE PROJECT -->
## About The Project

IPL Dashboard Server is a springboot project


### Features:
* View individual team performance by year.
* View all team matches for the past years.
* Pie-Chart - Display the team performance for the particular season.
* Http Basic authentication implemented using Spring Security.
* Secured REST- Point using JWT token for authorization.

### Built With
* REACT 18.2.0
* Bootstrap 5.3.3
* React Router DOM 6.3.3
___

<!-- GETTING STARTED -->
## Getting Started

#### Prerequisites
- Node.js  
- npm  
  Check Node.js and npm is installed correctly.
  ```
  node --version
  ```
  ```
  npm --version
  ```

#### Step 1: Clone the Repository
   ```sh
   git clone 'https://github.com/aatifansari/ipl-dashboard.git'
   ```
#### Step 2: Install NPM packages
Navigate to `ipl-dashboard-client` from root directory and install the React project

   ```sh
   cd ipl-dashboard/src/frontend
   npm install
   ```
#### Step 3: Run the application
To start the application, run the following command. This will run the application on the default port http://localhost:3000.
   ```js
   npm start
   ```
#### Step 4: Accessing the Application
Once the application is running, you can access it in your web browser at http://localhost:3000.

___

### Build Docker Image

#### Prerequisites
- Docker Desktop (Docker Daemon)  
  Before you begin, ensure you have docker installed and running on your system. You can download Docker from [Docker's official website](https://www.docker.com/get-started).

Check docker is installed
  ```sh
  cd docker --version
  ```

&nbsp;
#### Step 1: Build the Docker Image
Navigate to `ipl-dashboard-client` and build the image using below command

  ```sh
  cd ipl-dashboard-client
  docker build -t ipl-dashboard-server:0.0.1-RELEASE .
  ```

[//]: # (&nbsp;)

#### Step 2: Run the Docker Container

Once the image is built, you can run the docker container using the following command:

```bash
docker run -p 3000:80 --name ipl-server ipl-dashboard-server
```
Note: `-p` is used to forward network calls on container port:8080 to your system port:300

#### Step 3: Access the Application

Open a web browser and navigate to http://localhost:3000/login to access the login page.

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-url]: https://www.linkedin.com/in/mohd-atif-9b1122173/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555