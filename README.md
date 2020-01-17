# REST API using Node.js, Express and MySQL

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/indraarianggi/nodejs-mysql-api.git
   cd nodejs-mysql-api
   ```

2. Install the npm packages

   ```bash
   npm install
   ```

   Also install `nodemon` globally, if you don't have it yet.

   ```bash
   npm install -g nodemon
   ```

3. Congfigure environment settings

   Create a file with the following name and location `.env` and copy the contents from `.env.example` into it. Replace the values with your specific configuration. Don't worry, this file is in the `.gitignore` so it won't get pushed to github.

   ```javasscript
   # Database
   DB_HOST=<your-db-host>
   DB_USER=<your-db-username>
   DB_PASS=<your-db-password>
   DB_NAME=<your-db-name>
   ```

4. Running the app locally

   Run this command, which is located in npm script in `package.json` file.

   ```bash
   npm run dev
   ```

## Resources

1. [Build Node.js Rest APIs with Express & MySQL](https://bezkoder.com/node-js-rest-api-express-mysql/)

2. [Node.js Everywhere with Environment Variables!](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)
