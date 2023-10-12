<script setup lang="ts">
import { computed } from 'vue';
import { Producto } from '../models/Producto';

const props = defineProps({productos: Array<Producto>});

const total = computed(()=>{
    let totalPrecios:number = 0;
    props.productos?.forEach((prod)=>{
        totalPrecios += prod.precio;
    })
    return totalPrecios += totalPrecios * 0.13;
})
</script>
<template>
    <div class="total-container">
        <h3 class="total-title">Total</h3>
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

.total-title {
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