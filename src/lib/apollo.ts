import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otzyr518sz01xl84ds4e1y/master',
    cache: new InMemoryCache()
})