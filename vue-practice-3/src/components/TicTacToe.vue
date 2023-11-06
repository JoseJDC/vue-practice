<script setup lang="ts">
import { Ref, ref } from 'vue';

let cells:Ref<Array<string>> = ref(Array(9).fill(null));
</script>
<template>
  <main class="game">
    <div class="board">
      <div class="cell" v-for="cell in cells">{{ cell }}</div>
    </div>
  </main>
</template>

<style scoped>
.game{
  display: flex;
  align-items: center;
  justify-content: center;
}
.board{
  display: grid;
  width: 300px;
  height: 300px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
}
.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 4px solid white;
  border-radius: 15px;
}
.cell:hover{
  border-color: red;
}
</style>
