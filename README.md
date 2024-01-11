# Cloud Journal: A MERN-Based Aerial Photography Blogging Platform 




Features
--------



Architecture
------------

![Screenshot 2024-01-10 at 22 26 49](https://github.com/Wilson-ZheLin/CloudJournal-MERN/assets/145169519/dc175b84-8f91-4481-b5a8-2fed7bb2c103)

Demo
----



Getting Started
---------------

### Prerequisites
To run `Cloud Journal`, you'll need:
* [Node.js v20.8](https://nodejs.org/en) (not necessarily to be the same version)
* [MongoDB Atlas](https://www.mongodb.com/atlas/database) (or local MongoDB)
* [Google API Client ID](https://console.cloud.google.com/apis)
  * Google account authorization. This API is **free**.

### Installation
1. Enter the root directory in the terminal and operate the `client` and `server` through **two terminals** respectively

2. Create two `.env` files in the `client` and `server` folders respectively and enter your:
    * Port
    * MongoDB Connection URL
    * Google Client ID

   following the `.env.example` files
3. Install the required packages for the `server` side and run:

```
cd server
npm i
npm start
```

4. Install the required packages for the `client` side and run:

```
cd client
npm i --legacy-peer-deps
npm start
```

5. The browser should automatically open homepage

License
-------

This project is licensed under the [MIT License](./LICENSE).
