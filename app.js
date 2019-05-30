class Welcome extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

const element = (
  <Welcome message="👋 🌏 Hello, world in React with class components!" />
);

const container = document.getElementById("app");

ReactDOM.render(element, container);
