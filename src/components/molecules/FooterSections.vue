<template>
    <div class="footer-sections">
        <div v-for="section in sections" :key="section.title" class="footer-section">
            <button class="section-title">
                {{ section.title }}
                <img :src="ChevronDowntIcon" alt="arrow" class="icon" />
            </button>
            <ul class="section-list">
                <li v-for="item in section.items" :key="item">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import ChevronDowntIcon from "@/assets/icons/chevron-down-icon.svg";
import '@/components/molecules/style/footer-section.css'

const sections = [
    {
        title: "Chicks Gold",
        items: ["About Us", "Blog", "Bug Bounty", "Buy Sell & Swap"],
    },
    {
        title: "Support",
        items: ["Contact Us", "FAQ", "Sitemap"],
    },
    {
        title: "Legal",
        items: ["Privacy Policy", "Terms of Service", "Copyright Policy", "More"],
    },
];
</script>

<style scoped>
</style>