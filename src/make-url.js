export default function makeSearchUrl(queryOptions){
    const apiSite = 'https://api.edamam.com/search';
    const appId = 'c538b2ad';
    const appKey = 'cdd4607e98052b837fe9d9b3f3c13d10';

    const url = new URL(apiSite);
    url.searchParams.set('app_id', appId);
    url.searchParams.set('app_key', appKey);
    url.searchParams.set('q', queryOptions.q);
    return url.toString();
} 


