import { defineStore } from "pinia";
import { ref } from "vue";
import { games, itemTypes, type Game, type ItemType, type SortOption } from "@/constants";

export const useFilterStore = defineStore("filterStore", () => {
  const selectedSort = ref<SortOption>("low-high");
  
  const setSortOption = (sortOption: SortOption) => {
    selectedSort.value = sortOption;
  };

  const priceRange = ref<[number, number]>([0, 1500]);
  const setPriceRange = (min: number, max: number) => {
    priceRange.value = [min, max];
  };

  const searchQuery = ref("");
  const setSearchQuery = (query: string) => {
    searchQuery.value = query;
  };

  const selectedGame = ref<Game | null>(null);
  const availableGames = ref<Game[]>(games);
  const setGameFilter = (game: Game | null) => {
    selectedGame.value = game ?? null;
  };

  const selectedItemType = ref<ItemType | null>(null); 
  const setItemTypeFilter = (type: ItemType | null) => {
    selectedItemType.value = type;
  };

  const availableItemTypes = ref<ItemType[]>(Object.values(itemTypes).flat()); 

  return {
    selectedSort,
    setSortOption,
    priceRange,
    setPriceRange,
    searchQuery,
    setSearchQuery,
    selectedGame,
    availableGames,
    setGameFilter,
    selectedItemType,
    availableItemTypes,
    setItemTypeFilter,
  };
});
