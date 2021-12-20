import { cached } from './utils';
import apolloClient from './apolloSclient';
import { gql } from '@apollo/client';

async function storyBlok(context, query) {
  return await cached(context.resolvedUrl, 5, async () => {
    const { data } = await apolloClient.query({
      fetchPolicy: 'network-only',
      query: gql`
        ${query}
      `,
    });
    return data;
  });
}
