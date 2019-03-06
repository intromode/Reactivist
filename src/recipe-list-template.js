export default function makeRecipeListTemplate(recipe) {
    const html = `
    <li>
      <img src="${recipe.image}">
      <a href="${recipe.url}">${recipe.label}</a>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}
