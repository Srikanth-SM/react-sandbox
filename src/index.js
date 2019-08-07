import React from "react";
import ReactDOM from "react-dom";

const HOC = OriginalComponent => {
  return class C extends React.Component {
    state = {
      count: 0
    };
    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state);
    };

    render() {
      return (
        <OriginalComponent
          incrementCount={this.incrementCount}
          count={this.state.count}
        />
      );
    }
  };
};
class Button extends React.Component {
  render() {
    console.log(this.props);
    return (
      <button onClick={this.props.incrementCount}>
        Clicked {this.props.count} times
      </button>
    );
  }
}
class Heading extends React.Component {
  state = {
    count: 0
  };

  handleMouseEnter = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <h1 onMouseEnter={this.handleMouseEnter}>
        hovered {this.state.count} times
      </h1>
    );
  }
}

class WithModal extends React.Component {
  state = {
    title: "srikanth"
  };
  render() {
    return <></>;
  }
}
const WithHeading = HOC(Heading);
const WithButton = HOC(Button);

const App = () => {
  return (
    <div>
      <WithHeading />
      <WithButton />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// export default App;
