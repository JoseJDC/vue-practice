<script setup lang="ts">
import { Producto } from "../models/Producto";
import { defineProps } from "vue";

const props = defineProps({ productos: Array<Producto> });
const emits = defineEmits(['eliminar']);

const eliminar = (prod: Producto) => {
  emits('eliminar', prod)
}

</script>

<template>
  <div class="content">
    <table>
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Accion</th>
      </tr>
      <tbody v-for="prod in props.productos">
        <td>
          {{ prod.nombre }}
        </td>
        <td>
          {{ prod.precio.toFixed(2) }}
        </td>
        <td>
          <button @click="eliminar(prod)">Eliminar</button>
        </td>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

th {
  background-color: #333;
  color: white;
  padding: 12px;
  text-align: left;
}

tr:nth-child(odd) {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #e0e0e0;
}

td {
  padding: 8px;
}

tr:hover {
  background-color: #ccc;
}
</style>
