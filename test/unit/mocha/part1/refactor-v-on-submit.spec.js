const assert = require("chai").assert;
const esquery = require("esquery");
const esprima = require("esprima");
const parse5 = require("parse5");
const cheerio = require("cheerio");
const helpers = require("../helpers");

describe("BookForm.vue", () => {
  it("should have the v-on:submit method taking bookData @book-form-bookSubmit-takes-bookData", () => {
    const file = helpers.readFile("src/components/BookForm.vue");
    const nodes = helpers.parseFile(file);
    const script = helpers.getHtmlTag("script", nodes);
    const template = helpers.getHtmlTag("template", nodes);
    const content = parse5.serialize(template[0].content);
    const $ = cheerio.load(content);
    const form = $("form");
    let methods, bookSubmitMethod, bookDataParam, emmitBookData;

    if (script.length == 0) {
      assert(
        false,
<<<<<<< HEAD
        "We either didn't find a `script` tag, or any code in a `script` tag in the `BookForm` component."
=======
        "We either didn't find a script tag, or any code in a script tag in the BookForm component."
>>>>>>> 562816349e1c933e69c6629652621accea3dbb8f
      );
    }

    const ast = esprima.parse(script[0].childNodes[0].value, {
      sourceType: "module"
    });

    try {
      methods = esquery(ast, "Property[key.name=methods]");
    } catch (e) {
      assert(
        false,
        "Something went wrong and we weren't able to check your code."
      );
    }
    assert(
      methods.length > 0,
      "The BookForm's `methods` declaration is not present"
    );

    bookSubmitMethod = esquery(methods[0], 'Identifier[name="bookSubmit"]');
    assert(
      bookSubmitMethod.length > 0,
<<<<<<< HEAD
      "The `BookForm`'s `methods` object is not defining a `bookSubmit()` method."
=======
      "The BookForm's `methods` object is not defining a `bookSubmit()` method"
>>>>>>> 562816349e1c933e69c6629652621accea3dbb8f
    );

    bookDataParam = esquery(
      methods[0],
      'Property[key.name="bookSubmit"] > FunctionExpression > Identifier[name="bookData"]'
    );

    assert(
      bookDataParam.length > 0,
<<<<<<< HEAD
      "We are not passing `bookData` as a parameter of `bookSubmit()`."
=======
      "We are not passing `bookData` as a parameter of `bookSubmit()`"
>>>>>>> 562816349e1c933e69c6629652621accea3dbb8f
    );

    emmitBookData = esquery(
      methods[0],
      'Property[key.name="bookSubmit"] > FunctionExpression > BlockStatement > .body > CallExpression .arguments[name="bookData"]'
    );

    assert(
      emmitBookData.length > 0,
      "We are not calling `this.$emit()` with `bookData` as its second argument."
    );

<<<<<<< HEAD
    assert(
      !!form.attr()["v-on:submit.prevent"],
      "The `BookForm` form element does not have a `v-on:submit.prevent` directive."
    );

    assert(
      form
        .attr()
        ["v-on:submit.prevent"].match(/\s*bookSubmit\(\s*bookData\s*\)\s*$/),
=======
    assert.propertyVal(
      form.attr(),
      "v-on:submit.prevent",
      "bookSubmit(bookData)",
>>>>>>> 562816349e1c933e69c6629652621accea3dbb8f
      "The `v-on:submit.prevent` directive should update the `bookSubmit` call to take `bookData` as its argument."
    );
  });
});
