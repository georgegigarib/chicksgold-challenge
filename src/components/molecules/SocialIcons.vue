<template>
    <div class="social-icons">
      <a 
        v-for="social in socialLinks" 
        :key="social.name" 
        :href="social.url" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="social.icon" :alt="social.name" class="social-icon" />
      </a>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import FacebookIcon from "@/assets/icons/facebook-icon.png";
  import InstagramIcon from "@/assets/icons/instagram-icon.svg";
  import TwitterIcon from "@/assets/icons/twitter-icon.svg";
  import DiscordIcon from "@/assets/icons/discord-icon.svg";
  
  const socialLinks = ref([
    { name: "Facebook", url: "https://www.facebook.com", icon: FacebookIcon },
    { name: "Instagram", url: "https://www.instagram.com", icon: InstagramIcon },
    { name: "Twitter", url: "https://www.twitter.com", icon: TwitterIcon },
    { name: "Discord", url: "https://www.discord.com", icon: DiscordIcon },
  ]);
  </script>
  
  <style scoped>
  .social-icons {
    display: flex;
    width: 80vw;
    gap: 1rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  
  .social-icon {
    width: 30px;
    height: 30px;
    transition: transform 0.2s ease-in-out;
  }
  
  .social-icon:hover {
    transform: scale(1.1);
  }
  </style>