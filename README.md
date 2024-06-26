

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]


<h1 align = "center"> IPL DashBoard</h1>


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

Full-stack web application build using SpringBoot and React. 

![image](https://user-images.githubusercontent.com/44142827/216825306-86ef0897-ad9c-42ce-acb2-8047d3e9ed9f.png)


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
* MySQL
* React

___

<!-- GETTING STARTED -->
## Getting Started

### Server Installation 

#### Prerequisites
- Java 8
- Set JAVA_HOME in environment variable
- Maven (optional)  
Run below command to check java and maven is installed correctly.
```
java --version
```
```
mvn --version
```

Note: Use `./mvnw` in place of `mvn` if maven is not installed. If on Unix system give permission using below code.
```
chmod +x ./mvnw
```

#### 1. Clone the repo
   ```sh
   git clone 'https://github.com/aatifansari/ipl-dashboard.git'
   ```

#### 2. Install Maven project  
Navigate to root directory and install the maven project.
   ```sh
   cd ipl-dashboard
   mvn clean install
   ```

#### 3. Run the application

   ```sh
   mvn spring-boot:run
   ```
   `OR`  

   Navigate to target directory where jar is created and run the below code.
   
   ```sh
   java -jar ipl-dashboard-0.0.1-SNAPSHOT.jar
   ```
#### Step 4: Accessing the Application  
Once the application is running, you can access it in your web browser at http://localhost:9000.
___

<!-- UI GUIDE -->

### UI Installation 

#### Prerequisites
- Nodejs  
Run below command to check node is installed successfully.
```
node --version
```

#### Step 1: Clone the Repository 
   ```sh
   git clone 'https://github.com/aatifansari/ipl-dashboard.git'
   ```
#### Step 2: Install NPM packages  
Navigate to **frontend** directory and install the required NPM packages using the below command

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

#### Additional Notes
- Custom Port: If you need to run the application on a different port, you can specify it by modifying the start script in the package.json file or by setting the PORT environment variable before running npm start.  

___

<!-- DOCKER GUIDE -->

### Docker Installation Guide

This guide provides step-by-step instructions to set up and run the **Project Name** application using Docker image.

#### Prerequisites
- Docker Desktop (Docker Daemon)  
Before you begin, ensure you have installed and running on your system. You can download Docker from [Docker's official website](https://www.docker.com/get-started). Run below code to check docker version.
```
docker --version
```

#### Step 1: Clone the Repository  
Clone the `ipl-dashboard` repository 

```bash
git clone 'https://github.com/aatifansari/ipl-dashboard.git
```

#### Step 2: Build the Docker Image  
Navigate to the project directory and build the docker image using the provided `DockerFile`

```bash
cd ipl-dashboard/src/frontend
```

```bash
docker build -t ipl-dashboard-ui:0.0.1-RELEASE .
```

#### Step 3: Run the Docker Container  

Once the image is built, you can run the docker container using the following command:

```bash
docker run -p 8080:80 --name ipl-dashboard ipl-dashboard-ui
```
Note: `-p` is used to forward network calls on container port:80 to your system port:8080

#### Step 4: Access the Application

Open a web browser and navigate to http://localhost:8080 to access the application.

___


<!-- USAGE -->
## Usage

* ### Login Screen
![image](https://user-images.githubusercontent.com/44142827/216828495-90873a1d-4da8-44c2-be2b-e69bb1592d7b.png)

* ### Home Page
![image](https://user-images.githubusercontent.com/44142827/216828545-7fce221c-3c92-456e-8653-e5fefc7feefb.png)

* ### Team Page
![image](https://user-images.githubusercontent.com/44142827/216828589-c5d04f98-9efd-4ff0-9fe5-99ff9968be64.png)

* ### Match Page
![image](https://user-images.githubusercontent.com/44142827/216828626-602cd0ed-54c3-4c7a-898f-eee579e37be2.png)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[SpringBatch-url]: https://spring.io/batch
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mohd-atif-9b1122173/
[product-screenshot]: ![image](https://user-images.githubusercontent.com/44142827/216825059-b984bffb-fa05-4b48-b74f-f4da9c74ad23.png)
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAngular_%2528web_framework%2529&psig=AOvVaw0mnQ-cpeqVgjJKh_njttNk&ust=1675692571276000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjkjLbH_vwCFQAAAAAdAAAAABAE
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
