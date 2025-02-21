<template>
    <div class="mx-divider" :style="{ height: height ?? '25px' }"></div>
</template>

<script setup lang="ts">

interface Props {
    height?: string;
}

defineProps<Props>();

</script>
<style scoped>
.mx-divider {
    width: 1px;
    background: rgb(114, 113, 113);
}
</style>