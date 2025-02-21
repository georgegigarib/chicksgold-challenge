<template>
    <div class="currency-menu">
        <button @click="toggleMenu">
            {{ selectedCurrency }}
            <span :class="{ 'rotated': menuOpen }">▼</span>
        </button>
        <div v-if="menuOpen" class="button-dropdown-menu">
            <p @click="setCurrency('USD')">USD</p>
            <p @click="setCurrency('EUR')">EUR</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import '@/components/atoms/style/button.css'

const menuOpen = ref(false);
const selectedCurrency = ref("USD");
const toggleMenu = () => (menuOpen.value = !menuOpen.value);
const setCurrency = (currency: string) => {
    selectedCurrency.value = currency;
    menuOpen.value = false;
};
</script>

<style scoped>
.currency-menu button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
    padding: 5px;
    background: none;
    border: none;
}

.rotated {
    transform: rotate(180deg);
}

.currency-menu {
    padding: 5px;
    background-color: transparent;
    border-radius: 7px;
    position: relative;
}

.currency-menu:hover {
    background-color: rgba(103, 103, 103, 0.579);
}
</style>