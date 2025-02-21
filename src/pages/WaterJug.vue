<script setup lang="ts">
import { ref } from "vue";

// Variables reactivas
const bowlX = ref<number | null>(null);
const bowlY = ref<number | null>(null);
const desiredQuantity = ref<number | null>(null);
const steps = ref<string[]>([]);

// Función para calcular el MCD (Máximo Común Divisor)
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

// Algoritmo para resolver el Water Jug Challenge
function solveWaterJug(x: number, y: number, target: number) {
  steps.value = []; // Limpiar pasos previos

  if (target > Math.max(x, y)) {
    steps.value.push("No se puede obtener más agua que la jarra más grande.");
    return;
  }

  if (target % gcd(x, y) !== 0) {
    steps.value.push("No es posible medir esta cantidad con estas jarras.");
    return;
  }

  // Algoritmo de simulación de pasos
  let from = x;
  let to = 0;
  let step = `Llenar jarra de ${x}L (${from}, ${to})`;
  steps.value.push(step);

  while (from !== target && to !== target) {
    let temp = Math.min(from, y - to);
    to += temp;
    from -= temp;
    step = `Verter ${temp}L de ${x}L a ${y}L (${from}, ${to})`;
    steps.value.push(step);

    if (from === target || to === target) break;

    if (from === 0) {
      from = x;
      step = `Llenar jarra de ${x}L (${from}, ${to})`;
      steps.value.push(step);
    }

    if (to === y) {
      to = 0;
      step = `Vaciar jarra de ${y}L (${from}, ${to})`;
      steps.value.push(step);
    }
  }
}

// Función para iniciar el cálculo
function getSteps() {
  if (!bowlX.value || !bowlY.value || !desiredQuantity.value) {
    steps.value = ["Por favor, ingrese valores válidos."];
    return;
  }
  solveWaterJug(bowlX.value, bowlY.value, desiredQuantity.value);
}
</script>

<template>
  <div class="input-container">
    <h1>Water Jug Challenge</h1>

    <div class="input-labels">
      <label for="bowlX">Jarra X:</label>
      <input id="bowlX" v-model.number="bowlX" type="number" min="1" />
    </div>

    <div class="input-labels">
      <label for="bowlY">Jarra Y:</label>
      <input id="bowlY" v-model.number="bowlY" type="number" min="1" />
    </div>

    <div class="input-labels">
      <label for="desiredQuantity">Meta (L):</label>
      <input id="desiredQuantity" v-model.number="desiredQuantity" type="number" min="1" />
    </div>

    <button @click="getSteps">Calcular Pasos</button>

    <div v-if="steps.length > 0" class="results">
      <h2>Pasos:</h2>
      <ul>
        <li v-for="(step, index) in steps" :key="index">{{ step }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: auto;
}
.input-labels {
  display: flex;
  justify-content: space-between;
}
.results {
  margin-top: 1rem;
}
</style>
