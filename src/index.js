import recipes from '../data/mock-data.js';
import loadRecipes from './recipe-list-template.js';
import './search-term.js';
import { readFromQuery } from './update-hash.js';
import makeSearchUrl from './make-url.js';


window.addEventListener('hashchange', loadQuery);
    
loadQuery();

function loadQuery(){
    const hash = window.location.hash.slice(1);
    const queryOptions = readFromQuery(hash);
    const searchUrl = makeSearchUrl(queryOptions);

    fetch(searchUrl)
        .then(response => response.json())
        .then(recipeSearchData => {
            loadRecipes(recipeSearchData);
        });
}













loadRecipes(recipes);

