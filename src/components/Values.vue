<template>
  <div id="values" align="center" justify="center" class="values">
    <v-btn
      text
      v-for="n in values"
      :key="n.id"
      :value="n.value"
      :color="color"
      v-on:click="click(n)"
    >
      <span v-if="selected(n)">
        <h1>{{ n.value }}</h1>
      </span>
      <span v-else>
        {{ n.value }}
      </span>
    </v-btn>
  </div>
</template>

<script>
import Game from "@/game.js";
export default {
  props: {
    game: Game,
  },
  methods: {
    click(v) {
      this.game.value = v;
    },
    selected(v) {
      return this.game.value == v;
    },
  },
  computed: {
    values() {
      return this.game.player_values[this.game.player];
    },
    color() {
      if (this.game.player == 0) {
        return "red";
      } else {
        return "blue";
      }
    },
  },
};
</script>

<style scoped>
#values {
    margin-top: 30px;
}
</style>