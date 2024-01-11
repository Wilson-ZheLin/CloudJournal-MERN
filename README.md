# Cloud Journal: A MERN-Based Aerial Photography Blogging Platform 🌥️

`Cloud Journal` is a sleek, high-performance blogging platform built on the **MERN** stack (MongoDB, Express, React, Node.js), specializing in aerial photography. It blends advanced features with modern interfaces to offer a unique content sharing and discovery experience.

If you find it intriguing, please give me a star! 🌟

Features
--------

![Screenshot 2024-01-11 at 00 10 16](https://github.com/Wilson-ZheLin/CloudJournal-MERN/assets/145169519/4f9f193c-5e99-412c-ba5f-54b3cbcd7f9f)

* **Create** and **edit** personal blogs; **comment** and **like** all the blogs (one like per user per blog)
* [**Google Account OAuth**](https://console.cloud.google.com/apis) integration alongside conventional user authentication
* Incorporation of the **Aho-Corasick Algorithm** for sensitive word filtering
* **IP rate limiting** for traffic surge and attack protection
* Optimization of query latency through **pagination** and **database indexing**
* Integration of Continuous Integration/Continuous Deployment (**CI/CD**) and **Testing Tools**

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
1. Create two `.env` files in the `client` and `server` folders respectively and enter your:
    * Port
    * MongoDB Connection URL
    * Google Client ID

   following the `.env.example` files

2. Enter the root directory in the terminal and operate the `client` and `server` through **two terminals** respectively

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
