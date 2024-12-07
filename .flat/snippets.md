# Quill implementation

> > ------------ APPEND CONTENT ------------

## Methods

```js
insertText(index: Number, text: String, source: String = 'api'): Delta
insertText(index: Number, text: String, format: String, value: any, source: String = 'api'): Delta
insertText(index: Number, text: String, formats: { [String]: any }, source: String = 'api'): Delta
```

## Examples

```js
quill.insertText(0, "Hello", "bold", true)
quill.insertText(5, "Quill", {color: "#ffff00", italic: true})
```

> > ------------ OVERWRITE CONTENT (setContents) ------------

## Methods

```js
setContents(delta: Delta, source: String = 'api'): Delta
quill.setContents([ { insert: 'Hello ' }, { insert: 'World!', attributes: { bold: true } }, { insert: '\n' } ]);
```

## Example

```js
quill.setContents([{insert: "Hello "}, {insert: "World!", attributes: {bold: true}}, {insert: "\n"}])
```

> > ------------ OVERWRITE (setText) ------------

## Methods

```js
setText(text: String, source: String = 'api'): Delta
```

## Example

```js
quill.setText("Hello World!")
```

> > ------------ INTERPOLATE (updateContents) ------------

## Methods

```js
updateContents(delta: Delta, source: String = 'api'): Delta
```

## Example

```js
// Assuming the editor contains [{ insert: 'Hello World!' }]
quill.updateContents(
  new Delta()
    .retain(6 /*Keep 'Hello'*/)
    .delete(5 /*'world' is deleted*/)
    .insert("Quill")
    .retain(1, {bold: true /*Apple bold exclamation mark*/}),
)
```
