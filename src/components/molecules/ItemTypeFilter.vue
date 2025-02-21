<template>
  <div class="filter-container" @click="toggleDropdown">
    <label class="dropdown-label">
      <i class="icon-container type-icon"></i>
      <div>
        <span class="label-header">Item Type</span>
        <span class="container-text">{{ selectedItemType?.name || 'All' }}</span>
      </div>
      <i :class="['icon-arrow', { 'rotate-180': isOpen }]">▼</i>
    </label>
    <ul v-if="isOpen" class="dropdown-menu">
      <li @click="selectItemType(null)" class="dropdown-item">
        &ThickSpace;&ThickSpace;All
      </li>
      <li v-for="type in availableItemTypes" :key="type.name" @click="selectItemType(type)" class="dropdown-item">
        {{ type.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useFilterStore } from "@/store/filterStore";
import type { ItemType } from "@/constants";
import '@/components/molecules/style/filters.css'

const store = useFilterStore();
const selectedItemType = computed(() => store.selectedItemType);
const availableItemTypes = computed(() => store.availableItemTypes);

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectItemType = (type: ItemType | null) => {
  store.setItemTypeFilter(type);
  isOpen.value = false;
};

const closeDropdown = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".filter-container")) {
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
