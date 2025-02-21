<script setup lang="ts">
import Footer from "@/components/organism/Footer.vue";
import Header from "@/components/organism/Header.vue";
import Dashboard from "@/pages/Dashboard.vue";
</script>

<template>
    <div class="app-container">
        <div class="container">
            <Header />
            <Dashboard />
            <Footer />
        </div>
    </div>
</template>

<style scoped>
.app-container {
    background-image: url("@/assets/images/background.webp");
    background-size: cover;
    background-attachment: fixed;

    position: relative;
}

.container{
    background-color: #38394bf6;
}
</style>
