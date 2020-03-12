const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { ApolloServer, gql, AuthenticationError } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
const app = express();
const passport = require('./configAuth');
const cookieParser = require('cookie-parser')
const userSchema = require('./models/user');
const path = require('path');


require("./db");

app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());

require("./middlewares")(app, passport)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    if (req.cookies.cookie) {
      const user = await userSchema.findOne({ _id: req.cookies.cookie });
      console.log('user', user);
      return user;
    } else {
      throw new AuthenticationError('you must be logged in');
    }

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


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

server.applyMiddleware({ app, cors: { origin: "http://localhost:3000", credentials: true } });

const PORT = process.env.PORT || 8080;

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at port: ${PORT}`);
});
