const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

const typeDefs = gql`
    type Query {
        sayHello: String!
    }
`;

const resolvers = {
    Query: {
        sayHello: () => 'Hello World'
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen({port: 4567}).then((res) => {
    console.log(`Server running at ${res.url}`)
})