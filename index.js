const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const { VerifyCaptcha } = require('./captcha');

const typeDefs = gql`
    type Query {
        sayHello: String!
        Verify(token:String!):Boolean!
    }
`;

const resolvers = {
    Query: {
        sayHello: () => 'Hello World',
        Verify: VerifyCaptcha
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen({port: 3001}).then((res) => {
    console.log(`Server running at ${res.url}`)
})