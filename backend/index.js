const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const User = require('./models/User');
const Employee = require('./models/Employee');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const DB_HOST = "cluster0.aggzi5g.mongodb.net";
const DB_USER = "alvaroaguirremeza";
const DB_PASSWORD = "Charmander3";
const DB_NAME = "comp3133_assigment1";
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success MongoDB connection');
}).catch(err => {
  console.log('Error MongoDB connection');
});

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch(error => {
  console.error('Error starting server:', error.message);
});

