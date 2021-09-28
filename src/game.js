class Cell {
  constructor() {
    this.value = { id: 0, value: 0 };
    this.player = null;
  }

  press(value, player) {
    this.value = value;
    this.player = player;
  }
}

class Game {
  constructor() {
    this.table = [];
    for (let r = 0; r < 3; r++) {
      let row = [];
      for (let c = 0; c < 3; c++) {
        row.push(new Cell());
      }
      this.table.push(row);
    }

    this.player_values = {
      0: [
        {
          value: 1,
          id: 1,
        },
        {
          value: 1,
          id: 2,
        },
        {
          value: 3,
          id: 3,
        },
        {
          value: 3,
          id: 4,
        },
        {
          value: 6,
          id: 5,
        },
        {
          value: 6,
          id: 6,
        },
      ],
      1: [
        {
          value: 1,
          id: 1,
        },
        {
          value: 1,
          id: 2,
        },
        {
          value: 3,
          id: 3,
        },
        {
          value: 3,
          id: 4,
        },
        {
          value: 6,
          id: 5,
        },
        {
          value: 6,
          id: 6,
        },
      ],
    };

    this.player = 0;
    this.value = this.player_values[this.player][0];

    this.winner = null;
  }

  setValue(value) {
    // set current value
    if (value < 1 || value > 5) {
      alert("invalid selected value");
      return;
    }

    if (!this.player_values[this.player].includes(value)) {
      alert("this value already used by the player");
      return;
    }

    this.value = value;
  }

  removeItemMyIndex(items, i) {
    return items.slice(0, i).concat(items.slice(i + 1, items.length));
  }
  removeItemByValue(items, v) {
    return this.removeItemMyIndex(items, items.indexOf(v));
  }

  press(row, column) {
    // if game already finished — alert
    if (this.winner) {
      alert("game already finished");
      return;
    }

    if (!this.player_values[this.player].includes(this.value)) {
      alert("this value already used by the player");
      return;
    }

    let cell = this.table[row][column];
    cell.press(this.value, this.player);

    this.player_values[this.player] = this.removeItemByValue(
      this.player_values[this.player],
      this.value
    );

    // if (this.player_values[0].length == 0) {
    //   alert("the game is ended. refresh page for restart");
    //   return;
    // }

    // check finishing
    // set this.winner if finished
    // and return

    // change player
    if (this.player == 0) {
      this.player = 1;
    } else {
      this.player = 0;
    }

    this.value = this.player_values[this.player][0];
  }
}

export default Game;
