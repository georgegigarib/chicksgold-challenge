<template>
  <div class="search-wrapper">
    <img src="@/assets/icons/search-icon.svg" alt="search icon" class="search-icon" />
    <input type="text" name="search" v-model="searchQuery" placeholder="Search..." id="searchInput" @focus="onFocus"
      @blur="onBlur" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useFilterStore } from "@/store/filterStore";

const store = useFilterStore();
const searchQuery = computed({
  get: () => store.searchQuery,
  set: (value) => store.setSearchQuery(value),
});

const onFocus = () => {
  const wrapper = document.getElementById("search-wrapper");
  if (wrapper) {
    wrapper.style.border = "1px solid #1dbf73";
  }
};

const onBlur = () => {
  const wrapper = document.getElementById("search-wrapper");
  if (wrapper) {
    wrapper.style.border = "1px solid rgba(0, 0, 0, 0.276)";
  }
};
</script>

<style scoped>
.search-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #4349625a;
  color: black;
  padding: 15px 0px;
  transition: border-color 0.3s ease;
}

.search-wrapper:hover {
  background-color: #434962a3;
}

.search-icon {
  margin-left: 10px;
  width: 20px;
  height: 20px;
  opacity: 70%;
}

input[type="text"] {
  border: none;
  font-size: 16px;
  color: white;
  width: 100%;
  width: 100%;
  padding-left: 20px;
  background-color: transparent;
}

input[type="text"]:focus {
  outline: none;
  color: white;
}

input::placeholder {
  color: transparent;
  color: rgb(131, 129, 129);
}


@media (max-width: 880px) {
  .search-wrapper {
    width: 90vw;
  }
}
</style>
