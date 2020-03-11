const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
const app = express();
const passport = require('./configAuth');
const cookieParser = require('cookie-parser')
const userSchema = require('./models/user');


require("./db");

app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());

require("./middlewares")(app, passport)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    // try {
    //   if (!req.cookies.cookie) res.status(401).send();
    //   const user = await userSchema.findOne({ _id: req.cookies.cookie });
    //   if (user) {
    //     req.user = user;
    //     next();
    //   } else {
    //     res.status(401).send();
    //   }
    // } catch (err) {
    //   console.log('err', err)
    //   res.status(500).send();
    // }
    return
  },
  playground: true,
  cors: true,
  debug: true,
  introspection: true,
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
    schemaTag: "beta"
  }
});

server.applyMiddleware({ app, cors: { origin: "http://localhost:3000", credentials: true } });

const PORT = process.env.PORT || 4000;

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at port: ${PORT}`);
});
