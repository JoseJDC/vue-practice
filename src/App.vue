<script setup lang="ts">
import { Ref, ref } from 'vue';
import AgregarProductos from './components/AgregarProductos.vue'
import ListaProductos from './components/ListaProductos.vue'
import CalculoProductos from './components/CalculoProductos.vue'
import { Producto } from './models/Producto';

const producto1 = new Producto(1, "Carne", 19.99);
const producto2 = new Producto(2, "Leche", 9.99);
const producto3 = new Producto(3, "Fruta", 4.99);
let productos: Ref<Array<Producto>> = ref([producto1,producto2,producto3]);

const agregar = (prod: Producto) => {
  productos.value.push(prod)
}

const eliminar = (prod: Producto) => {
  productos.value = productos.value.filter((index) => index.id != prod.id)
}

</script>

<template>
  <AgregarProductos @agregar-producto="agregar"/>
  <ListaProductos :productos="productos" @eliminar="eliminar"/>
  <CalculoProductos :productos="productos"/>
</template>

<style scoped>
</style>
