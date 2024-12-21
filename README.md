# fullstack-uea-course

This repository is about a course from UEA (University from Amazonas' state)
In this course we will study many important topics about backend, frontend, sql and a little bit of figma.

Basically, during this course we could get into a journey about: 
- React.js with typescript creating your template using vite.
- Create API with Nest.js with Express and Prisma. 
- Concepts and basic commands of Figma to create a design
- Database using postgresql
- Dockering your application using nginx to run frontend server
- Deploy your application creating a docker-compose with database, backend and frontend



To run the *final-project* which is a ToDo app 
change your IP in .env (----)
- Run with docker (faster)
    - Use a docker command to build it all 
        → docker compose up --build 
    - After upping containers, It will be necessary to run migration by hands 
        → npx prisma migrate dev (it will be necessary to install prisma first) 