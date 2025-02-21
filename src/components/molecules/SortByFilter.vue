<template>
  <div class="sort-container" @click="toggleDropdown">
    <label class="dropdown-label dropdown-label-sort">
      <i class="sort-icon"></i>
      <div>
        <span class="label-header">Sort By</span>
        <span class="container-text">{{ selectedSortLabel }}</span>
      </div>
      <i :class="['icon-arrow icon-arrow-sort', { 'rotate-180': isOpen }]">▼</i>
    </label>
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="option in sortOptions" :key="option.value" @click="selectSort(option.value)" class="dropdown-item">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useFilterStore } from "@/store/filterStore";
import '@/components/molecules/style/filters.css'
import type { SortOption } from "@/constants";

const store = useFilterStore();
const isOpen = ref(false);

const sortOptions = [
  { value: "low-high", label: "Price: Low - High" },
  { value: "high-low", label: "Price: High - Low" },
  { value: "a-z", label: "name: A - Z" },
  { value: "z-a", label: "name: Z - A" },
];

const selectedSortLabel = computed(() => {
  const selectedOption = sortOptions.find(option => option.value === store.selectedSort);
  return selectedOption ? selectedOption.label : "Seleccionar Orden";
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectSort = (value: string) => {
  store.selectedSort = value as SortOption;
  isOpen.value = false;
};

const closeDropdown = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".sort-container")) {
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