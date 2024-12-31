import React, { Component } from "react";
import Emoji from "./Emoji/Emoji";

export class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voted: {
        1: 0,
        2: 0,
        3: 0,
      },
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(index) {
    this.setState((state) => {
      return {
        voted: {
          ...this.state.voted,
          [index]: this.state.voted[index] + 1,
        },
      };
    });
  }

  render() {
    return (
      <div className="vote">
        {Object.entries(this.state.voted).map((el) => {
          //[[1, 2], [2, 3]]
          return (
            <Emoji
              index={el[0]}
              value={el[1]}
              onButtonClick={this.onButtonClick}
            />
          );
        })}
      </div>
    );
  }
}
