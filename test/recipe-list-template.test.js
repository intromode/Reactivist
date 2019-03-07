import { makeRecipeListTemplate } from '../src/recipe-list-template.js';
const test = QUnit.test;

QUnit.module('recipe list tests');

const recipe = {
    image: 'https://www.edamam.com/web-img/315/315bbfb86606944ddb05a35a0714e2de.jpg',
    url: 'recipe-detail.html',
    label: 'Vegan Salted Butter Caramel Sauce'
};

test('Create List Template', assert => {
    //arrange
    const expected = `
    <li>
      <img src="https://www.edamam.com/web-img/315/315bbfb86606944ddb05a35a0714e2de.jpg">
      <a href="recipe-detail.html">Vegan Salted Butter Caramel Sauce</a>
    </li>
    `;

    //act
    const result = makeRecipeListTemplate(recipe);

    //assert
    assert.htmlEqual(result, expected);
});