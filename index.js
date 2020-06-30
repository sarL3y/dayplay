import express from 'express';
import graphqlHTTP from 'express-graphql';
import morgan from 'morgan';
import cors from 'cors';
import schema from './data/schema';
import { PORT } from './config/database';

const port = PORT || 8080;
const path = require("path");
const app = express();

const CLIENT_BUILD_PATH = path.join(__dirname, "./client/build");

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(CLIENT_BUILD_PATH)));

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.use('/api', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.get("*", (req, res) => {
    const index = path.join(CLIENT_BUILD_PATH, "index.html");
  
    res.sendFile(index);
  });

app.listen(port, () => console.log(`Running at localhost:${port}`));