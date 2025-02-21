<template>
  <div class="pagination">
    <button
      @click="changePage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="pagination-arrow-button"
    >
      <img class="pagination-arrow-image" :src="ChevronLeftIcon" />
    </button>

    <div class="pagination-page-numbers">
      <template v-for="(page, index) in visiblePages" :key="index">
        <button
          v-if="page !== '...'"
          @click="changePage(Number(page))"
          :class="['pagination-page-button', { 'pagination-active': page === currentPage }]"
        >
          {{ page }}
        </button>
        <span v-else @click="expanded = true" class="pagination-expand-dots">...</span>
      </template>
    </div>

    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="pagination-arrow-button"
    >
      <img class="pagination-arrow-image" :src="ChevronRightIcon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ChevronRightIcon from "@/assets/icons/chevron-right-icon.svg";
import ChevronLeftIcon from "@/assets/icons/chevron-left-icon.svg";
import '@/components/molecules/style/pagination.css'

const props = defineProps<{
  totalPages: number;
  currentPage: number;
}>();

const emit = defineEmits(["page-change"]);
const expanded = ref(false);

const changePage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit("page-change", page);
    expanded.value = false;
  }
};

const visiblePages = computed(() => {
  const range: (number | string)[] = [];
  const { currentPage, totalPages } = props;

  if (totalPages <= 5 || expanded.value) {
    for (let i = 1; i <= totalPages; i++) {
      range.push(i);
    }
  } else {
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);

    if (start > 1) range.push(1);
    if (start > 2) range.push("...");

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (end < totalPages - 1) range.push("...");
    if (end < totalPages) range.push(totalPages);
  }

  return range;
});
</script>