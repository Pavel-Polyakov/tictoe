<template>
  <div>
    <tr v-for="(row, i) of game.table" v-bind:key="i" v-bind:index="i">
      <td v-for="(cell, j) of row" v-bind:key="j" v-bind:index="j">
        <Cell
          :value="cell.value"
          :player="cell.player"
          :row=i
          :column=j
          :game="game"
        />
      </td>
    </tr>
  </div>
</template>
<script>
import Cell from "@/components/Cell";
export default {
  props: ["game"],
  components: {
    Cell,
  },
};
</script>
<style scoped>
div {
  display: table;
  border-collapse: separate;
  border-spacing: 0.1vw;
  margin: 0 auto;
  margin-top: 60px;
}
</style>