# ipl-dashboard-server

# STAGE: 1
FROM openjdk:8-jdk-alpine as build

WORKDIR /app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

CMD ./mvnw package -DskipTests=true

# STAGE: 2
FROM openjdk:8-jdk-alpine as production

ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
