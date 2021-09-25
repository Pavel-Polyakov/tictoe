<template>
  <v-app>
    <v-main>
      <Board v-if="game" :game="this.game" />
      <Values v-if="game" :game="this.game" />
    </v-main>
  </v-app>
</template>

<script>
import Board from "@/components/Board";
import Values from "@/components/Values";
import Game from "@/game.js";

export default {
  name: "App",
  props: {},
  data() {
    return {
      game: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.game = new Game();
    },
  },
  components: {
    Board,
    Values,
  },
};
</script>


