import React, { Component } from "react";
import Emoji from "./Emoji/Emoji";

export class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voted: {
        1: {
          img: "",
          count: 0,
        },
        2: {
          img: "",
          count: 0,
        },
        3: {
          img: "",
          count: 0,
        },
      },
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  getResults() {
    //Вот тут найти наибольший count
    //Записать его в стейт
  }

  onButtonClick(index) {
    this.setState((state) => {
      return {
        voted: {
          ...this.state.voted,
          [index]: {
            img: this.state.voted[index].img,
            count: this.state.voted[index] + 1,
          },
        },
      };
    });
  }

  render() {
    //Вот тут измени цикл, чтобы и count передавался, и картинка
    return (
      <div className="vote">
        {Object.entries(this.state.voted).map((el) => {
          //[[1, 2], [2, 3]]
          return (
            <Emoji
              //img={ сюда картинку }
              index={el[0]}
              value={el[1]}
              onButtonClick={this.onButtonClick}
            />
          );
        })}

        <button onClick={this.getResults}></button>

        <p>
          The biggest count:{" "}
          {this.state.theBiggest ? this.state.theBiggest : ""}
        </p>
      </div>
    );
  }
}
