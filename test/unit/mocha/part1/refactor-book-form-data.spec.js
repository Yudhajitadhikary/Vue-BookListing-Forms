const assert = require("chai").assert;
const parse5 = require("parse5");
const esquery = require("esquery");
const esprima = require("esprima");
const helpers = require("../helpers");

describe("BookForm.vue", () => {
  it("should contain a data function that returns a bookData object @book-form-contains-data-object", () => {
    const file = helpers.readFile("src/components/BookForm.vue");
    const nodes = helpers.parseFile(file);
    const script = helpers.getHtmlTag("script", nodes);

    if (script.length == 0) {
      assert(
        false,
        "We either didn't find a `script` tag, or any code in a `script` tag in the `BookForm` component."
      );
    }

    const ast = esprima.parse(script[0].childNodes[0].value, {
      sourceType: "module"
    });

    const data = esquery(ast, "Property[key.name=data]");
    assert(
      data.length > 0,
      "The `BookList`'s `data()` method's is not present."
    );

    const bookData = esquery(ast, "Property[key.name=bookData]");
    assert(
      bookData.length > 0,
      "The `BookList`'s `bookData` object is not present."
    );

    let bookTitle = esquery(
      data[0],
      'Property[key.name=bookTitle] > .value[value=""]'
    );

    assert(
      bookTitle.length > 0,
<<<<<<< HEAD:test/unit/mocha/part1/refactor-book-form-data.spec.js
      "The `bookData`'s `bookTitle` property is not defined with value of `''`."
=======
      "The `bookData` `bookTitle` property is not defined with value of `''`"
>>>>>>> 562816349e1c933e69c6629652621accea3dbb8f:test/unit/mocha/part6/refactor-book-data.spec.js
    );

    let bookAuthor = esquery(
      data[0],
      'Property[key.name=bookAuthor] > .value[value=""]'
    );
    assert(
      bookAuthor.length > 0,
<<<<<<< HEAD:test/unit/mocha/part1/refactor-book-form-data.spec.js
      "The `bookData`'s `bookAuthor` property is not defined with value of `''`."
=======
      "The `bookData` `bookAuthor` property is not defined with value of `''`"
>>>>>>> 562816349e1c933e69c6629652621accea3dbb8f:test/unit/mocha/part6/refactor-book-data.spec.js
    );

    let finishedReading = esquery(
      data[0],
      "Property[key.name=finishedReading] > .value[value=false]"
    );

    assert(
      finishedReading.length > 0,
<<<<<<< HEAD:test/unit/mocha/part1/refactor-book-form-data.spec.js
      "The `bookData`'s `finishedReading` property is not defined with value of `false`."
=======
      "The `bookData` `finishedReading` property is not defined with value of `false`"
>>>>>>> 562816349e1c933e69c6629652621accea3dbb8f:test/unit/mocha/part6/refactor-book-data.spec.js
    );

    let ownership = esquery(data[0], "Property[key.name=ownership]");

    assert(
      ownership.length > 0,
      "The `bookData`'s `ownership` property is not defined."
    );

    let ownershipValue = esquery(
      data[0],
      "Property[key.name=ownership] > .value > .elements"
    );

    assert(
      Array.isArray(ownershipValue),
      "The `bookData`'s `ownership` value is not defined with a value of `[]`."
    );

    assert(
      ownershipValue.length == 0,
<<<<<<< HEAD:test/unit/mocha/part1/refactor-book-form-data.spec.js
      "The `bookData`'s `ownership` value does't seem to be an empty array."
=======
      "The `bookData` `ownership` value does't seem to be an empty array."
>>>>>>> 562816349e1c933e69c6629652621accea3dbb8f:test/unit/mocha/part6/refactor-book-data.spec.js
    );
  });
});
