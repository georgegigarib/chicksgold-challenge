<script setup lang="ts">

import CardContainer from "@/components/organism/CardContainer.vue";

defineProps<{ msg?: string }>()
</script>

<template>
  <div class="dashboard">
    <h1 class="card-container-title">
      Condimentum consectetur
    </h1>
    <CardContainer />
    <!-- <WaterJug /> -->
  </div>
</template>

<style scoped>
.dashboard {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.read-the-docs {
  color: #888;
}

.card-container-title {
  width: 85vw;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #e1e1e1;
  display: flex;
  justify-content: space-between;
  width: 85vw;
  margin-bottom: 1.5rem;
  display: flex;
  padding-top: 4rem;
  margin: auto;
  max-width: 1500px;
  
}
</style>
