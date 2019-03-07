import recipe from '../data/test-data.js';
import { makeRecipeListTemplate } from '../src/recipe-list-template.js';
const test = QUnit.test;

const testRecipe = {
}

QUnit.module('recipe list tests');

test('Create List Template', assert => {
    //arrange
    const expected = `
    <li>
      <img src="https://www.edamam.com/web-img/315/315bbfb86606944ddb05a35a0714e2de.jpg">
      <a href="recipe-detail.html">Vegan Salted Butter Caramel Sauce</a>
    </li>
    `;

    //act
    const result = makeRecipeListTemplate(testRecipe);

    //assert
    assert.htmlEqual(result, expected);
});