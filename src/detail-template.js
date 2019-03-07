export function makeRecipeDetailTemplate(recipe){
    const html = `
    <dl>
    <span class="make-row">
      <dt>Recipe Name</dt>      
      <dd>${recipe.label}</dd>
    </span>
    <span class="make-row">
      <dt>Ingredients</dt>
      <dd>${recipe.ingredients}</dd>
    </span>
    <span class="make-row">
      <dt>Recipe Link</dt>
      <dd>${recipe.url}</dd>
    </span>
    </dl>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}