<template>
  <button :class="cellClass" v-on:click="click">
    {{ value }}
  </button>
</template>

<script>
import Game from "@/game.js";
export default {
  props: {
    value: Number,
    player: Number,
    row: Number,
    column: Number,
    game: Game,
  },

  methods: {
    click() {
      this.game.press(this.row, this.column);
    },
  },
  computed: {
    cellClass() {
      let classes = ["cell"];

      switch (this.value) {
        case 0:
          classes.push("value_0");
          break;
        case 1:
          classes.push("value_1");
          break;
        case 2:
          classes.push("value_2");
          break;
        case 3:
          classes.push("value_3");
          break;
        case 4:
          classes.push("value_4");
          break;
        case 5:
          classes.push("value_5");
          break;
      }

      if (this.player == 0) {
        classes.push("player_0");
      } else if (this.player == 1) {
        classes.push("player_1");
      } else {
        classes.push("player_null");
      }

      if (this.game.value <= this.value) {
        classes.push("disabled");
      }

      return classes;
    },
  },
};
</script>
<style scoped>
.cell {
  width: 100px;
  height: 100px;
  margin: 1px;
  font-size: 38pt;
  border: 3px ridge rgba(25, 25, 25, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  /* color: #616161; */
  color: white;
}

.player_0 {
  background-color: lightpink;
}
.player_1 {
  background-color: lightskyblue;
}

.disabled {
  pointer-events: none;
}
</style>