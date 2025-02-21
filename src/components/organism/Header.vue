<template>
  <header class="header">
    <div class="menu-section">
      <img class="logo" :src="CLogo" alt="Menu" />

      <div class="divider">

        <Divider />
      </div>

      <div class="menu-icon">
        <MenuOptions />
      </div>
    </div>

    <div class="button-section">
      <CurrencyButton />
      <CartButton />
      <SignInButton />
    </div>
  </header>
</template>

<script setup lang="ts">
import CLogo from "@/assets/icons/cglogo.svg";
import Divider from "@/components/atoms/Divider.vue";
import MenuOptions from "@/components/molecules/Menu.vue";
import CurrencyButton from "@/components/atoms/CurrencyButton.vue";
import CartButton from "@/components/atoms/CartButton.vue";
import SignInButton from "@/components/atoms/SignInButton.vue";
import '@/components/organism/style/header.css'
</script>
