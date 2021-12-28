import { cached } from './utils';
import config from '../config';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const sclient = new ApolloClient({
  headers: { Token: 'M41W4Anz0fuLGbIbOx2OMAtt' }, //qGTkYgVNnETWziJxb7EYHAtt
  uri: config.storyblokiUrl,
  cache: new InMemoryCache(),
});

const storyblok = async (key, query, variables = {}) => {
  return await cached(key, config.storyblokCache, async () => {
    const { data } = await sclient.query({
      fetchPolicy: 'network-only',
      query,
      variables,
    });
    return data;
  });
};

export default storyblok;
