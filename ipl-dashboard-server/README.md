<!-- IPL DASHBOARD SERVER -->

[![LinkedIn][linkedin-shield]][linkedin-url]

<h1 align = "center"> IPL DashBoard Server</h1>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



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
* SpringBoot 2.7
* SpringSecurity 5.7
* SpringBatch
* SpringData JPA
* In-Memory H2 / MySQL
___

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
- Install Java 8 and set JAVA_HOME environment variable
- Install Maven and set MAVEN_HOME environment variable   
  Check java and maven is installed correctly.
    ```
    java --version
    ```
    ```
    mvn --version
    ```

Note: 
* Use `./mvnw` and `mvnw` in place of `mvn` for UNIX and WINDOWS OS if maven is not installed.  
* If on Unix system give permission using below code.
```
chmod +x ./mvnw
```

#### STEP 1: Clone the Repository
   ```sh
   git clone 'https://github.com/aatifansari/ipl-dashboard.git'
   ```

#### STEP 2: Installation
Navigate to `ipl-dashboard-server` and install the maven project.
   ```sh
   cd ipl-dashboard
   mvn clean install
   ```

#### STEP 3: Running the Application

   ```sh
   mvn spring-boot:run
   ```
`OR`

Navigate to `target` directory and run the below command.

   ```sh
   cd target
   java -jar ipl-dashboard-0.0.1-SNAPSHOT.jar
   ```

#### Step 4: Accessing the Application
Once the application is running, you can access it http://localhost:9000

---

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
Navigate to `ipl-dashboard-server` and build the image using below command 

  ```sh
  cd ipl-dashboard-server
  docker build -t ipl-dashboard-server:0.0.1-RELEASE .
  ```

[//]: # (&nbsp;)

#### Step 2: Run the Docker Container

Once the image is built, you can run the docker container using the following command:

```bash
docker run -p 8080:8080 --name ipl-server ipl-dashboard-server
```
Note: `-p` is used to forward network calls on container port:8080 to your system port:8080


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-url]: https://www.linkedin.com/in/mohd-atif-9b1122173/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555