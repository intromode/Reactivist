export function makeRecipeListTemplate(recipe) {
    const html = `
    <li>
      <img src="${recipe.recipe.image}">
      <a href="${recipe.recipe.url}">${recipe.recipe.label}</a>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

const recipeContainer = document.getElementById('recipe-container');

export default function loadRecipes(recipes) {
    recipes.hits.forEach(recipe => {
        const dom = makeRecipeListTemplate(recipe);
        recipeContainer.appendChild(dom);
    });
}

