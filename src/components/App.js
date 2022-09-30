import React from "react";
import Buttons from "./Buttons";
import Display from "./Display";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
      result: "",
      reminder: "",
      countDecimal: 0,
      isTwoOrMoreOperators: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    const innerText = event.target.innerText;

    if (isNaN(innerText)) {
      this.handleSymbol(innerText);
    } else {
      this.handleNumber(innerText);
    }
  }

  handleNumber(innerText) {
    let display = this.state.display;

    if (innerText == 0 && display === "0") {
      return null;
    } else {
      if (display === "0") {
        display = "";
        display += innerText;
      } else {
        display += innerText;
      }
      this.setState({ display });
    }
    this.state.isTwoOrMoreOperators
      ? this.setState({ isTwoOrMoreOperators: false })
      : null;
  }

  handleSymbol(innerText) {
    let display = this.state.display;
    let result = this.state.result;
    let countDecimal = this.state.countDecimal;

    switch (innerText) {
      case "C":
        this.setState({
          display: "0",
          result: "",
          reminder: "",
          countDecimal: 0,
        });
        break;
      case "←":
        display = display.length > 1 ? display.slice(0, -1) : "0";
        display.charAt(display.length - 1) === "."
          ? (countDecimal = 0)
          : countDecimal;
        this.setState({ countDecimal, display });
        break;
      case "=":
        result += display;
        display =
          eval(result) % 1 !== 0 && (eval(result) + "").length > 4
            ? eval(result).toFixed(4) + ""
            : eval(result) + "";

        this.setState({ display, result: "", reminder: "" });
        this.state.isTwoOrMoreOperators
          ? this.setState({ isTwoOrMoreOperators: false })
          : null;

        break;
      case ".":
        countDecimal++;
        countDecimal === 1 ? (display += ".") : null;
        this.setState({ countDecimal, display });

        break;
      case "-":
        display === "0"
          ? this.setState({ display: "-" })
          : this.handleMath(innerText);

        break;
      default:
        this.handleMath(innerText);
        break;
    }
  }

  handleMath(innerText) {
    let display = this.state.display;
    let result = this.state.result;
    let reminder = this.state.reminder;

    if (this.state.isTwoOrMoreOperators) {
      result = result.slice(0, -1);
    } else {
      result += display;
    }

    if (innerText === "×") {
      result += "*";
    } else if (innerText === "÷") {
      result += "/";
    } else {
      result += innerText;
    }

    reminder = result;
    this.setState({
      display: "0",
      countDecimal: "",
      result,
      isTwoOrMoreOperators: true,
      reminder,
    });
  }

  render() {
    return (
      <div className="calc">
        <Display display={this.state.display} reminder={this.state.reminder} />
        <Buttons onButtonClick={this.onButtonClick} />
      </div>
    );
  }
}

export default App;
