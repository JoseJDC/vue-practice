<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Producto } from '../models/Producto';

const emits = defineEmits(['agregarProducto']);

let productoNuevo: Ref<Producto> = ref(new Producto(0,'',0));

const agregar = () => {
    if(productoNuevo.value.nombre && productoNuevo.value.precio){
        emits('agregarProducto', new Producto(
            Math.random(),
            productoNuevo.value.nombre,
            productoNuevo.value.precio
            ))
    }
}

</script>
<template>
    <div>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="productoNuevo.nombre" required>
        <label for="precio">Precio</label>
        <input type="number" id="precio" v-model="productoNuevo.precio" required>
        <button @click="agregar">Agregar</button>
    </div>
</template>
<style scoped>
div {
    width: 300px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    text-align: center;
}

label {
    display: block;
    margin: 10px 0;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 5px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background-color: #0056b3;
}
</style>