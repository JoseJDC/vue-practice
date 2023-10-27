<script setup lang="ts">
import { ComputedRef, Ref, computed, ref } from "vue";
import { Producto } from "../models/Producto";

const props = defineProps({ productos: Array<Producto> });

const impuesto: Ref<number> = ref(0);

const total: ComputedRef<number> = computed(() => {
  let totalPrecios: number = 0;
  props.productos?.forEach((prod: Producto) => {
    totalPrecios += prod.precio;
  });
  return (totalPrecios += totalPrecios * (impuesto.value / 100));
});
</script>
<template>
  <div class="total-container">
    <h3 for="tax" class="title">Impuesto</h3>
    <input id="tax" type="number" class="total-tax" v-model="impuesto" />
    <h3 class="title">Total</h3>
    <h4 class="total-amount">{{ total.toFixed(2) }}</h4>
  </div>
</template>
<style scoped>
.total-container {
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  margin: 10px;
}

.total-tax {
  font-size: 1.5rem;
  font-weight: bold;
  width: 50px;
  color: #333;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
}

.total-amount {
  font-size: 1.2rem;
  color: #007bff;
  margin: 5px 0;
}
</style>
