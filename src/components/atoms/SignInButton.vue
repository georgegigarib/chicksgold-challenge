<template>
    <div class="user-menu">
        <button>
            SIGN IN
            <img :src="UserIcon" alt="User" />
        </button>
    </div>
</template>

<script setup lang="ts">
import UserIcon from "@/assets/icons/user-icon.svg";
</script>

<style scoped>
.user-menu {
    background-color: #39E29E;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
}

.user-menu:hover {
    background-color: rgb(0, 114, 0);
}

.user-menu button {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    display: flex;
    gap: 0.4rem;
    align-items: center;
    text-transform: uppercase;
    background: none;
    border: none;
    cursor: pointer;
    color: black;
    font-weight: 500;
}

.user-menu img {
    width: 16px;
    height: 16px;
    margin-bottom: 4px;
}
</style>