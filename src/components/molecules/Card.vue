<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-left">
        <div>
          <span v-show="card.onSale" class="sale-badge">•<span>&ThinSpace;ON SALE</span></span>
        </div>
        <div>
          <span v-show="card.inStock" class="stock-status">In stock</span>
        </div>
      </div>
      <div>
        <div class="quantity-controls" @mouseover="showControls = true" @mouseleave="showControls = false">
          <button @click="decreaseQuantity">&ThinSpace;-&ThinSpace;</button>
          <input type="number" v-model="quantity" @input="validateQuantity" :class="{ 'show-arrows': showControls }" />
          <button @click="increaseQuantity">+</button>
        </div>
      </div>
    </div>
    <img :src="card.image" :alt="card.game.name" class="card-image" />
    <div class="card-content">
      <div class="title-game-logo">
        <h3 class="card-title">{{ card.title }}</h3>
        <div class="card-game-logo-container">
          <img :src="card.game.image" :alt="card.game.name" class="card-game-logo" />
        </div>
      </div>
      <p class="card-price">
        ${{ card.price }}
        <span v-if="card.onSale" class="discount"><span class="discount-text">${{ card.discountPrice }}</span></span>
      </p>
      <p class="card-description">{{ card.description }}</p>
    </div>
    <div class="card-buttons">
      <button class="details-btn">DETAILS</button>
      <button class="add-btn">
        <span class="add-btn-text">ADD</span>
        <img class="cart-icon" :src="CartIcon" alt="Cart" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CartIcon from "@/assets/icons/cart-icon.svg";
import type { Card } from "@/constants";
import '@/components/molecules/style/card.css'

defineProps<{ card: Card }>();

const quantity = ref(1);
const showControls = ref(false);

const increaseQuantity = () => quantity.value++;
const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};
const validateQuantity = () => {
  if (quantity.value < 1) quantity.value = 1;
};
</script>
