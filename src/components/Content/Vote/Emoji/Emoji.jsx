import React, { Component } from "react";

export class Emoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>
          <img src={this.props.img} alt="" />
        </button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
