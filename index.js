import express from 'express';
import graphqlHTTP from 'express-graphql';
import morgan from 'morgan';
import cors from 'cors';
import schema from './data/schema';

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.use('/api', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/api'));