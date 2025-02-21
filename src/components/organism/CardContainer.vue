<template>
  <div>
    <div class="filters-container">
      <div class="filters-group-1">
        <GameFilter />

        <SearchBar />
      </div>
      <div class="filters-group-2">
        <PriceFilter />

        <ItemTypeFilter />
      </div>
    </div>

    <div class="card-grid-container">
      <div class="inner-bar">
        <div>
          <p class="showing-text">Showind {{ itemsPerPage }} - from {{ filteredAndSortedCards.length }}</p>
        </div>
        <SortByFilter />
      </div>
      <div v-if="paginatedCards.length > 0" class="card-grid">
        <Card v-for="card in paginatedCards" :key="card.id" :card="card" />
      </div>
      <p v-else class="no-products-message">No hay productos disponibles</p>

      <Pagination :totalPages="totalPages" :currentPage="currentPage" @page-change="changePage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useFilterStore } from "@/store/filterStore";
import { cards } from "@/constants";
import Card from "@/components/molecules/Card.vue";
import GameFilter from "@/components/molecules/GameFilter.vue";
import SearchBar from "@/components/molecules/SearchBar.vue";
import PriceFilter from "@/components/molecules/PriceFilter.vue";
import ItemTypeFilter from "@/components/molecules/ItemTypeFilter.vue";
import SortByFilter from "@/components/molecules/SortByFilter.vue";
import Pagination from "@/components/molecules/Pagination.vue";
import '@/components/organism/style/card-container.css'

const filterStore = useFilterStore();
const itemsPerPage = 15;
const currentPage = ref(1);

const filteredAndSortedCards = computed(() => {
  return cards
    .filter((card) => {
      return (
        card.price >= filterStore.priceRange[0] &&
        card.price <= filterStore.priceRange[1] &&
        (filterStore.searchQuery === "" || card.title.toLowerCase().includes(filterStore.searchQuery.toLowerCase())) &&
        (!filterStore.selectedGame || card.game.name === filterStore.selectedGame.name) &&
        (!filterStore.selectedItemType || card.itemType === filterStore.selectedItemType.name)
      );
    })
    .sort((a, b) => {
      switch (filterStore.selectedSort) {
        case "low-high":
          return a.price - b.price;
        case "high-low":
          return b.price - a.price;
        case "a-z":
          return a.title.localeCompare(b.title);
        case "z-a":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
});



const totalPages = computed(() => {
  return Math.ceil(filteredAndSortedCards.value.length / itemsPerPage);
});

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredAndSortedCards.value.slice(start, end);
});

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
</script>
