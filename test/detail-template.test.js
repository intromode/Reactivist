import htmlEqual from './html-equal.js';
import { makeRecipeDetailTemplate } from '../src/detail-template.js';

const test = QUnit.test;

QUnit.module('Detail template tests');

const ingredients = [
    'sugar',
    'water',
    'butter',
    'vegan creamer',
    'fleur de sel'
];

const spacedIngredients = ingredients.map(x => ' ' + x).toString().slice(1);



const recipe = {
    label: 'Vegan Salted Butter Caramel Sauce',
    ingredients: spacedIngredients,
    url: 'http://www.tarteletteblog.com/2008/09/gluten-free-and-vegan-daring-bakers.html'
};

test('dynamically create detail table for recipes', assert => {
    //arrange
    const expected = `
    <dl>
    <span class="make-row">
      <dt>Recipe Name</dt>      
      <dd>Vegan Salted Butter Caramel Sauce</dd>
    </span>
    <span class="make-row">
      <dt>Ingredients</dt>
      <dd>sugar, water, butter, vegan creamer, fleur de sel</dd>
    </span>
    <span class="make-row">
      <dt>Recipe Link</dt>
      <dd>http://www.tarteletteblog.com/2008/09/gluten-free-and-vegan-daring-bakers.html</dd>
    </span>
    </dl>
    `;

    //act
    const result = makeRecipeDetailTemplate(recipe);
    //assert
    assert.htmlEqual(result, expected);
});