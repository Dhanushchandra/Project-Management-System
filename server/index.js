require("dotenv").config();
const express = require("express");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

const schema = require("./schema/schema");

const connectDB = require("./config/db");

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,

    graphiql: process.env.NODE_ENV === "development" ? true : false,
  })
);

connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
