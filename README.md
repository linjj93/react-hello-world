# React Hello World

👋🌏 Hello, world in React

## React

React provides a `createElement` method that creates a React element of a given type, which can be an HTML tag name (e.g. `div`, `h1`, etc.), a React component, or a React fragment.

```js
React.createElement(type)
```

For instance, `React.createElement('div')` will create a `<div></div>` element. To add text in the element you can specify that in the third argument, like so:

```js
React.createElement('div', null, 'Some interesting content here')
```

which results in `<div>Some interesting content here</div>`.

## ReactDOM

ReactDOM provides a `render` method that renders a React element into the DOM in the specified container.

```js
ReactDOM.render(element, container);
```

You would use `React.createElement()` to create the React element.

You could use `document.querySelector()` to select the container where you want to place your React element in.

## References

- [`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement)
- [`ReactDOM.render()`](https://reactjs.org/docs/react-dom.html#render)
