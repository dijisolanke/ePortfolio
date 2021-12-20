import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import config from '../config';

const client = new ApolloClient({
  uri: `${config.strapiUrl}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
