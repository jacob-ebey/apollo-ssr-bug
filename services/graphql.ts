import { ApolloError, ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
	typeDefs: gql`
		type Query {
			ping: String
			error: String
		}
	`,
	resolvers: {
		Query: {
			ping: () => 'Pong',
			error: () => {
				throw new ApolloError('Some Error', 'ROFL');
			}
		}
	}
});

server.listen().then(({ url }) => console.log(`Server listening at ${url}`));
