
// fetch a swagger-definition and a data to edit
Promise.all([
  fetch('http://localhost:10010/swagger').then(res => res.json()),
  fetch('http://localhost:10010/books/some-book').then(res => res.json()),
]).then(results => {

  // destructuring
  const [swg, data] = results;

  // mutate the swagger-definition into a JSON Schema
  const schema = {
    $ref: '#/definitions/Book',
    definitions: swg.definitions,
  };

  // create editor
  // see https://github.com/jdorn/json-editor#options for details to construct
  const element = document.getElementById('editor-container');
  const editor = new JSONEditor(element, { schema, startval: data });

})
