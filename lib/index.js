import 'isomorphic-fetch'

/**
 * @param  {String} url
 * @return {Function} graphql fetch
 */
export default function fabricFetch(url) {
    /**
     * @param  {String} query graphql query
     * @param  {Object} vars  graphql query args
     * @param  {Object} opts  fetch options
     * @return {Promise} fetch promise
     */
    return async function graphQLFetch(query, vars = {}, opts = {}) {
        let options = {
            ...opts,
            method: 'POST',
            headers: new Headers(opts.headers)
        };

        if (!query) throw new Error('query must be defined');

        options.body = JSON.stringify({
            query: query,
            variables: JSON.stringify(vars)
        });

        if (!options.headers.get('content-type')) {
            options.headers.append('Content-Type', 'application/json')
        }

        const res = await fetch(`${url}`, options);

        return await res.json();
    }
}