<template>
  <div class="filter-container" @click="toggleDropdown">
    <label class="dropdown-label">
      <i class="icon-container price-icon"></i>
      <div>
        <span class="label-header">Price Range</span>
        <span class="container-text">{{ selectedPriceRange || "ALL" }}</span>
      </div>
      <i :class="['icon-arrow', { 'rotate-180': isOpen }]">▼</i>
    </label>
    <div v-if="isOpen" class="dropdown-menu" @click.stop>
      <div class="range-container">
        <div class="price-items">
          <div class="price-item">
            <label for="minPrice" class="price-label">Min</label>
            <input type="number" id="minPrice" v-model="minPrice" :min="minLimit" :max="maxPrice" @input="updatePrice"
              class="price-input" :step="10" placeholder="0" />
          </div>
          <div class="price-item">
            <label for="maxPrice" class="price-label">Max</label>
            <input type="number" id="maxPrice" v-model="maxPrice" :min="minPrice" :max="maxLimit" @input="updatePrice"
              class="price-input" :step="10" placeholder="0" />
          </div>
        </div>
        <div class="price-item">
          <div class="slider-container">
            <input type="range" v-model="maxPrice" :min="minPrice" :max="maxLimit" @input="updatePrice"
              class="price-slider" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useFilterStore } from "@/store/filterStore";
import '@/components/molecules/style/filters.css'

const store = useFilterStore();
const isOpen = ref(false);

const minLimit = 0;
const maxLimit = 1500;

const minPrice = computed({
  get: () => store.priceRange[0],
  set: (value) => {
    const validValue = value < 0 ? 0 : value;
    store.setPriceRange(validValue, store.priceRange[1]);
  },
});

const maxPrice = computed({
  get: () => store.priceRange[1],
  set: (value) => {
    const validValue = value < 0 ? 0 : value;
    store.setPriceRange(store.priceRange[0], validValue);
  },
});

const selectedPriceRange = computed(() =>
  store.priceRange ? `$${store.priceRange[0]} - $${store.priceRange[1]}` : "ALL"
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const updatePrice = () => {
  store.setPriceRange(minPrice.value, maxPrice.value);
};

</script>
<style scoped>
.dropdown-menu { 
  padding: 1rem;
}
</style>