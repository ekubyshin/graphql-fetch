# graphql-fetch
Fetch for GraphQL requests

This function helps you to do http requests for API written in GraphQL.

Returns GraphQL response (JSON).

If errors occurred then field named errors is present.

Based on isomorphic-fetch

#Usage:

    import fabric from 'graphqlfetcher'
    const fetch = fabric('http://som_url/graphql');
    
    fetch(`
      query Q($input: GraphQLInputObject){
        someQuery(input:$input) {field}
      }`,
      {
        input: {
          var1: 'value1'
        }
      },
      //provide headers if needed
      {
        headers: {
          Authorization: 'Bearer some_token'
        }
      }
      
