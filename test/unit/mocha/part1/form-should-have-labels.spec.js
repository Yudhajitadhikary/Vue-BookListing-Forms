const assert = require("chai").assert;
const parse5 = require("parse5");
const cheerio = require("cheerio");
const helpers = require("../helpers");

describe("BookForm.vue", () => {
  it("should contain three labels with a `for` attribute @book-form-will-contain-labels", () => {
    const file = helpers.readFile("src/components/BookForm.vue");
    const nodes = helpers.parseFile(file);
    const tagName = helpers.getHtmlTag("template", nodes);
    const content = parse5.serialize(tagName[0].content);
    const $ = cheerio.load(content);
    const label = $("form").find("label");

    assert(
      label.length === 3,
      "The form doesn't have three `<label>` elements with a `for` attribute."
    );

    assert(
      !!label.attr()["for"],
      "The `BookForm` `<label></label>` does not have a `for` attribute containing `finishedReading` as its value."
    );

    assert(
      label.attr()["for"].match(/\s*finishedReading\s*$/),
      "The `BookForm` `<label></label>` does not have a `for` attribute containing `finishedReading` as its value."
    );

    assert(
      $('label[for="borrowed"]').length > 0,
      "The `BookForm `<label></label>` does not have a `for` attribute containing `borrowed` as its value."
    );

    assert(
      $('label[for="bought"]').length > 0,
      "The `BookForm` `<label></label>` does not have a `for` attribute containing `bought` as its value."
    );

    assert(
      $('label[for="finishedReading"]')
        .text()
        .match(/\s*Finished\s*Reading/gi),
<<<<<<< HEAD:test/unit/mocha/part1/form-should-have-labels.spec.js
      "The `BookForm` does not have a `<label></label>` with a text of `Finished Reading`."
=======
      "The BookForm does not have a label with a text of `Finished Reading`."
>>>>>>> 562816349e1c933e69c6629652621accea3dbb8f:test/unit/mocha/part6/form-should-have-labels.spec.js
    );

    assert(
      $('label[for="borrowed"]')
        .text()
        .match(/\s*borrowed/gi),
<<<<<<< HEAD:test/unit/mocha/part1/form-should-have-labels.spec.js
      "The `BookForm` does not have a `<label></label>` with a text of `borrowed`."
=======
      "The BookForm does not have a label with a text of `borrowed`."
>>>>>>> 562816349e1c933e69c6629652621accea3dbb8f:test/unit/mocha/part6/form-should-have-labels.spec.js
    );

    assert(
      $('label[for="bought"]')
        .text()
        .match(/\s*bought/gi),
<<<<<<< HEAD:test/unit/mocha/part1/form-should-have-labels.spec.js
      "The `BookForm` does not have a `<label></label>` with a text of `bought`."
=======
      "The BookForm does not have a label with a text of `bought`."
>>>>>>> 562816349e1c933e69c6629652621accea3dbb8f:test/unit/mocha/part6/form-should-have-labels.spec.js
    );
  });
});
