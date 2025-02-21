<template>
  <div class="filter-game-container" @click="toggleDropdown">
    <label class="game-dropdown-label">
      <img v-if="selectedGame?.image" :src="selectedGame.image" :alt="selectedGame.name" class="game-icon" />
      <i v-else class="icon-container controller-icon"></i>
      <span>{{ selectedGame?.name || 'Select a game' }}</span>
      <i :class="['icon-arrow', { 'rotate-180': isOpen }]">▼</i>
    </label>
    <ul v-if="isOpen" class="dropdown-menu">
      <li @click="selectGame(null)" class="dropdown-item">
        <i class="icon-container controller-icon"></i>
        &ThickSpace;&ThickSpace;All
      </li>
      <li v-for="game in availableGames" :key="game.name" @click="selectGame(game)" class="dropdown-item">
        <img :src="game.image" :alt="game.name" class="game-icon" />
        {{ game.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useFilterStore } from "@/store/filterStore";
import type { Game } from "@/constants";
import '@/components/molecules/style/filters.css'

const store = useFilterStore();
const selectedGame = computed(() => store.selectedGame);
const availableGames = computed(() => store.availableGames);

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectGame = (game: Game | null) => {
  store.setGameFilter(game);
  isOpen.value = false;
};

const closeDropdown = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".filter-game-container")) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<style scoped>

</style>