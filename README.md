# nixi1-api

## Run

1. Clone the repository: `git clone https://github.com/chri5bot/nixi1-api.git`

2. Go into the project: `cd nixi1-api/`

3. Install packages: `npm install`

4. Add .env file

5. Run the project: `npm run dev`

6. Open the link: `http://localhost:4000/`

7. First you need to login to generate a json web token

```graphql
mutation {
  loginUser(input: { username: "admin", password: "admin123" }) {
    token
  }
}
```

Copy the token generated for example: ![login](https://i.imgur.com/9V1pa6I.png)

8. You could see a quick demo of the api in the link below: https://www.loom.com/share/01c1d730f7134780b588cfd042f5e390

## Technologies

- https://github.com/jaredpalmer/backpack

  Backpack is minimalistic build system for Node.js. Inspired by Facebook's create-react-app, Zeit's Next.js, and Remy's Nodemon, Backpack lets you create modern Node.js apps and services with zero configuration. Backpack handles all the file-watching, live-reloading, transpiling, and bundling, so you don't have to.

- https://github.com/expressjs/express

  Express. js is a Node js web application server framework, which is specifically designed for building single-page, multi-page, and hybrid web applications.

- https://github.com/motdotla/dotenv

  Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

- https://github.com/lodash/lodash

  Lodash makes JavaScript easier by taking the hassle out of working with arrays,
  numbers, objects, strings, etc.

- https://github.com/Automattic/mongoose

  Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

- https://github.com/apollographql/apollo-server

  Apollo Server is a community-maintained open-source GraphQL server. It works with pretty much all Node.js HTTP server frameworks, and we're happy to take PRs to add more! Apollo Server works with any GraphQL schema built with GraphQL.js--so you may build your schema with that or a convenience library such as graphql-tools.
