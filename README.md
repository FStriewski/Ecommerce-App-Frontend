
# Ecommerce App
 A simple app that allows you to display, add, change and remove products. 

## 1. Functionality:

### Frontend: 
* User authentication: Sign up, log in, log out
* Product management: Display, add, modify and delete products from the database [(CRUD)]

### Backend / Routes:

#### Admin routes:

|**URI**|**VERB**|**ACTION**|
|-------------|-----------|---------------------|
| /users/     | GET       | Get all users       |
| /users/:id  | GET       | Get single user     |
| /users/     | POST      | Add user            |
| /users/:id  | PUT       | Edit single user    |
| /users/:id  | DELETE    | Delete single user  |


#### Product routes:

|**URI**|**VERB**|**ACTION**|
|-------------|-----------|---------------------------|
| /products/     | GET       | Get all products       |
| /products/:id  | GET       | Get single product     |
| /products/     | POST      | Add single product     |
| /products/:id  | PUT       | Edit single product    |
| /products/:id  | DELETE    | Delete single product  |


## 2. Installation & Prerequisites
For installation & running the app best use: 
 [Yarn](https://yarnpkg.com/lang/en/) - Dependency Management

### Frontend: 
Open terminal, go to frontend folder, run "yarn install" start or "npm install" depending on your setup.
Then run "yarn start" or "npm start" This will run the app on port 3000 in your web browser. 

### Backend: 
Same as frontend, run "yarn install" for the dependencies. Afterwards run "nodemon ." in the terminal. This will start the server on port 4009.

### Database: 
I'm running a docker container (port 5432) with a Postgres DB. A local DB should work as well.


## 3. Copyright etc.

### Build with:
* [React](https://reactjs.org/) - The web framework used for frontend
* [Redux](https://redux.js.org) - State manager for React
* [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) - Styling
* [TypeOrm](https://github.com/typeorm) - TypeScript focused ORM for the backend.  

### Authors
**Friedrich Striewski**
See also https://github.com/agroXchange/frontend and https://github.com/agroXchange/backend for a full grown market place project I have contributed to.

### License
Feel free to use as you see fit.

### Acknowledgments
* SignUp, LogIn / LogOut uses parts of Codaisseurs boilerplate code. 
