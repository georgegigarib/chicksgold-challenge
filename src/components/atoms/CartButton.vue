<template>
  <div class="cart-menu">
    <button @click="toggleMenu">
      <img :src="CartIcon" alt="Cart" />
      CART ({{selectedQuantity}})
    </button>
    <div v-if="menuOpen" class="button-dropdown-menu">
      <p @click="setQuantity('3')">3</p>
      <p @click="setQuantity('6')">6</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartIcon from "@/assets/icons/cart-icon.svg";
import { ref } from "vue";
import '@/components/atoms/style/button.css'

const menuOpen = ref(false);
const selectedQuantity = ref("0");
const toggleMenu = () => (menuOpen.value = !menuOpen.value);
const setQuantity = (quantity: string) => {
  selectedQuantity.value = quantity;
  menuOpen.value = false;
};

</script>

<style scoped>
.cart-menu {
  background-color: transparent;
  position: relative;
  cursor: pointer;
  border-radius: 7px;
}

.cart-icon {
  width: 20px;
  height: 20px;
}

.cart-menu:hover {
  background-color: rgba(103, 103, 103, 0.579);
}

.cart-menu button {
  border: 0;
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  text-transform: uppercase;
}

.cart-menu img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
