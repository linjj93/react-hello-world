function Welcome(props) {
  return <h1>{props.message}</h1>;
}

const element = (
  <Welcome message="👋 🌏 Hello, world in React with function components!" />
);

const container = document.getElementById("app");

ReactDOM.render(element, container);
