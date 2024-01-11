# CloudJournal: A MERN-Based Aerial Photography Blogging Platform 




Features
--------



Architecture
------------



Demo
----



Getting Started
---------------

### Prerequisites
To run `CloudJournal`, you'll need:
* [Node.js v20.8](https://nodejs.org/en) (not necessarily the same)
* Configure your [MongoDB Atlas](https://www.mongodb.com/atlas/database) (or local MongoDB) and copy the connection link
* [Google API Client ID](https://console.cloud.google.com/apis) for Google account authorization. This API is **free**.

### Installation
1. Enter the root directory in the terminal and operate the `client` and `server` through two terminals respectively

2. Create two `.env` files in the `client` and `server` folders respectively. Enter your **Port**, **MongoDB Connection URL** and **Google Client ID** following the `.env.example`

3. Install the required packages for **server side** and run:

```
cd server
```
```
npm i
```
```
npm start
```

4. Install the required packages for **client side** and run:

```
cd client
```
```
npm i --legacy-peer-deps
```
```
npm start
```

5. The browser should automatically open homepage

License
-------

This project is licensed under the [MIT License](./LICENSE).
