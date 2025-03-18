<template>
  <div>
    <NuxtRouteAnnouncer />
  </div>
  <NuxtLayout> <!-- Loads the layout (default, or any other specified layout) -->
    <NuxtPage /> <!-- Renders the page content within the layout -->
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogImage: '/datasnake.png'
})
</script>

<style>
@import 'public/styles/base.css';
@import 'public/styles/main.css';
 body {
  background-color: #666;
  color: #333;
  padding: 0px;
  margin: 0px;
  font-family: Arial, sans-serif;
 }
</style>

