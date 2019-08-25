<template>
  <div>
    <!-- Navbar -->
    <navbar></navbar>

    <!-- Main Content -->
    <router-view />

    <!-- Footer Content -->
    <!-- <footer-bar></footer-bar> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooterBar from "@/components/Footer.vue";

export default {
  name: "portal-layout",
  components: {
    Navbar,
    FooterBar
  }
};
</script>