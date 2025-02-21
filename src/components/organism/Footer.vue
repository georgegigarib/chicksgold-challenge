<template>
  <footer class="footer">
    <div class="footer-container-content">
      <PaymentMethods />
      <SocialIcons />
      <hr width="80%">
      <div class="footer-content">
        <div class="footer-top">
          <div class="footer-logo">
            <img :src="CGLogo" alt="Language" />
          </div>
          <p class="contact">support@chicksgold.com</p>
        </div>
        <FooterSections />
        <div class="trustpilot">
          <img :src="TrustPilotIcon" alt="Trustpilot" />
          <p>Trustpilot Reviews</p>
        </div>
      </div>
      <p class="copyright">
        © 2017 - 2020 Chicksgold.com. All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import CGLogo from "@/assets/icons/cglogo.svg";
import TrustPilotIcon from "@/assets/icons/trust-pilot-stars-icon.svg";
import PaymentMethods from "@/components/molecules/PaymentMethods.vue";
import SocialIcons from "@/components/molecules/SocialIcons.vue";
import FooterSections from "@/components/molecules/FooterSections.vue";
import '@/components/organism/style/footer.css'
</script>
