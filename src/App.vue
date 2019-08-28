<template>
  <div id="app">
    <portal-layout></portal-layout>
  </div>
</template>

<script>
import PortalLayout from "./layout/PortalLayout.vue";

export default {
  name: "app",
  components: {
    PortalLayout
  }
};
</script>

<style>
body {
  margin-bottom: 60px;
}
</style>