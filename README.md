# This is a work in progress project

This is the back-end for a full-stack app that I'm buidling with MERN Stack. 

## Stack
- NodeJS
- ContextAPI
- JWT
- Bcrypt
- MongoDB / Mongoose / MongoDB Atlas

## Routes
So far the app has 3 endpoints:
- GET Ping: http://localhost:8888/ping/
- POST User: http://localhost:8888/api/users/
- POST Login: http://localhost:8888/api/login/


## Installation

To get a local copy up and running follow these simple steps.

1. Clone the repo
   ```sh
   git clone https://github.com/jempico/fakebook-mern-api.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Add environment variables: edit or create and `.env` file in the root directory with the following data: 
   ```
   PORT=8888
   DB_USER = tester
   DB_PASSWORD = AWnHq3IDZaeDL8DP
   SECRET_TOKEN_ACCESS = 3d9683dc562b1e28fafec01bf1b4438da8faf35b205adf7049221854076040d879882ebd9c900f71dbf18352d08ae363c5f0f3eacabe40892f0777e9f27f0e93   
 ```
5. Run the app: 
   ```sh
   npm start
   ```

<!-- Endpoints  -->
## Endpoints

Some examples of how the request body should look like in order to make a request:

1. <b>POST/users</b>: adds a new user
   ``` 
   {   
    "email": "ivan@gmail.com",
    "password": "ivan123"
   }
   ``` 

2. <b>POST/login</b>: logins a new user
   ``` 
   {   
    "email": "ivan@gmail.com",
    "password": "ivan123"
   }
   ``` 

## Provided users

Some users have been already loaded in the database for testing purspose:

1. <b>User 1</b>:
   ``` 
   {   
    "email": "ivan@gmail.com",
    "password": "ivan123"
   }
   ``` 

2. <b>User 2</b>: 
   ``` 
   {   
    "email": "eloi@gmail.com",
    "password": "eloi123"
   }
   ``` 

3. <b>User3</b>: 
   ``` 
   {   
    "email": "marta@gmail.com",
    "password": "marta123"
   }
   ``` 

## Contact

Jemimah Pico - [Portfolio](https://jempico.com) - [Linkedin](http://linkedin.com/in/jempico) - jpfilarca@gmail.com 

Project Link: [https://github.com/jempico/fakebook-mern.git](https://github.com/jempico/fakebook-mern.git)