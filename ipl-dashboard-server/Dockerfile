# ipl-dashboard-server

### STAGE 1: Build the Application
FROM maven:3.9.8-eclipse-temurin-8-alpine as build

# Set current working directory
WORKDIR /app

# Copy pom.xml file
COPY pom.xml .

# Copy project source code
COPY src src

# Package the application
RUN mvn package -DskipTests=true

### STAGE 2: Minimal docker image to run the app
FROM maven:3.9.8-eclipse-temurin-8-alpine as production

ARG JAR_FILE=app/target/*.jar
COPY --from=build ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
