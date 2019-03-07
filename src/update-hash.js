export function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
  // searchParams.set('page', 1);
    return searchParams.toString();
}

export function readFromQuery(hash) {
    const searchParams = new URLSearchParams(hash);
    const queryOptions = {
        q: searchParams.get('searchTerm')
    };
    return queryOptions;
}