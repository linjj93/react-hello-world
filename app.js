const app = document.querySelector("#app");

// function Hello(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

const helloWorld = <Hello name="World" />;
// helloWorld.textContent = "Hello World!";
// app.appendChild(helloWorld);

ReactDOM.render(helloWorld, app);
