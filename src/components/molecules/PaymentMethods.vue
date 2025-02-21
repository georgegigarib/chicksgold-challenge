<template>
    <div class="payment-methods-container">
      <div class="payment-methods">
        <a 
          v-for="method in paymentMethods" 
          :key="method.name" 
          target="_blank"
        >
          <img 
            :src="method.icon" 
            :alt="method.name" 
            :class="method.large ? 'icon-large' : 'icon-small'" 
          />
        </a>
      </div>
      <span class="payment-methods-text"> and 50+ more</span>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import VisaIcon from "@/assets/icons/payment-methods/visa-logo.svg";
  import MasterCardIcon from "@/assets/icons/payment-methods/mastercard-logo.svg";
  import AmericanExpressIcon from "@/assets/icons/payment-methods/american-express-logo.png";
  import SkrillIcon from "@/assets/icons/payment-methods/skrill-logo.svg";
  import EtherumIcon from "@/assets/icons/payment-methods/etherum-logo.svg";
  import BitcoinIcon from "@/assets/icons/payment-methods/bit-coin-logo.svg";
  import DogeIcon from "@/assets/icons/payment-methods/doge-coin-icon.svg";
  import '@/components/molecules/style/payment-methods.css'
  
  const paymentMethods = ref([
    { name: "visa", icon: VisaIcon, large: true },
    { name: "mastercard", icon: MasterCardIcon, large: true },
    { name: "American Express", icon: AmericanExpressIcon, large: true },
    { name: "Skrill", icon: SkrillIcon, large: true },
    { name: "Etherum", icon: EtherumIcon },
    { name: "Bitcoin", icon: BitcoinIcon },
    { name: "Doge", icon: DogeIcon },
  ]);
  </script>
