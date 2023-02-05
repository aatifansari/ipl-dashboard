

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



<!-- GETTING STARTED -->
## Getting Started



### Prerequisites

Download and install the following to setup the runtime environment for
* Back-End - Java 8
* Front-End - Node (npm to download the dependecy)

### Installation Backend

1. Clone the repo
   ```sh
   git clone 'https://github.com/aatifansari/ipl-dashboard.git'
   ```
2. Open terminal in the root project directory. Run mvn clean install
   ```sh
   mvn clean install
   ```
3. Run the application 
   ```js
   mvn spring-boot:run
   ```
   OR Navigate to target directory and the following commands in the termal.
   
   ```js
   java -jar ipl-dashboard-0.0.1-SNAPSHOT.jar
   ```

### Installation UI

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone 'https://github.com/aatifansari/ipl-dashboard.git'
   ```
2. Install NPM packages - Node will automatically scan packge.json and download all required dependency.
   ```sh
   npm install
   ```
3. Run the application on default port - http://localhost:3000 -
   ```js
   npm start
   ```
   
   
<!-- USAGE EXAMPLES -->
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
