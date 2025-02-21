<template>
  <div class="menu-container">
    <div class="desktop-menu">
      <button v-for="(item, index) in menuItems" :key="index" @click="toggleCategory(index)" class="menu-button">
        {{ item.title }}
        <img :src="ChevronDowntIcon" alt="arrow" class="arrow-down" :class=" ['arrow', { 'open': activeIndex === index }]"/>
      </button>
    </div>
    <button @click="openMobileMenu" class="mobile-menu-button">☰</button>

    <div :class="['menu-dropdown', { 'active': activeIndex !== null }]">
      <div class="menu-category">
        <span v-for="(subItem, subIndex) in menuItems[activeIndex]?.subItems" :key="subIndex" class="menu-item">
          {{ subItem }}
        </span>
      </div>
    </div>

    <div :class="['mobile-menu', { 'open': isMobileMenuOpen }]">
      <button @click="closeMobileMenu" class="close-button">✕</button>
      <div v-for="(item, index) in menuItems" :key="index" class="mobile-category">
        <h3 class="category-title" @click="toggleMobileCategory(index)">
          {{ item.title }}
          <span :class="['arrow', { 'open': mobileActiveIndex === index }]">▼
          </span>
        </h3>
        <div :class="['mobile-items', { 'expanded': mobileActiveIndex === index }]">
          <span v-for="(subItem, subIndex) in item.subItems" :key="subIndex" class="mobile-item">
            {{ subItem }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChevronDowntIcon from '@/assets/icons/chevron-down-icon.svg';
import '@/components/molecules/style/menu.css'

const activeIndex = ref(null);
const isMobileMenuOpen = ref(false);
const mobileActiveIndex = ref(null);

const menuItems = ref([
  { title: "CURRENCY", subItems: Array.from({ length: 20 }, (_, j) => `Opción ${j + 1}`) },
  { title: "ITEMS", subItems: Array.from({ length: 20 }, (_, j) => `Opción ${j + 1}`) },
  { title: "ACCOUNTS", subItems: Array.from({ length: 20 }, (_, j) => `Opción ${j + 1}`) },
  { title: "SERVICES", subItems: Array.from({ length: 20 }, (_, j) => `Opción ${j + 1}`) },
  { title: "SWAP", subItems: Array.from({ length: 20 }, (_, j) => `Opción ${j + 1}`) },
  { title: "SELL", subItems: Array.from({ length: 20 }, (_, j) => `Opción ${j + 1}`) }
]);


const toggleCategory = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const openMobileMenu = () => {
  isMobileMenuOpen.value = true;
  mobileActiveIndex.value = null; // Resetea cuando se abre el menú
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const toggleMobileCategory = (index) => {
  mobileActiveIndex.value = mobileActiveIndex.value === index ? null : index;
};
</script>