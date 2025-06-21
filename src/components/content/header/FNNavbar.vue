<script setup lang="ts">
import { ref } from "vue";
import '@/components/styles/navbar.css';

const menuShow = ref(false);

const toggleMenu = () => {
  menuShow.value = !menuShow.value;
};
</script>

<template>
  <div class="fnnavbar-res">
    <div class="fn-logo">
      <img src="@/assets/FN-logo.svg" alt="foodnow logo" width="150px" height="42px" />
    </div>
    <div class="fn-menus" @click="toggleMenu">
      <img src="@/assets/images/icons/menu.svg" alt="hamburger menu" />
    </div>
  </div>
  <div class="fnnavbar-overlay" :style="{ display: menuShow ? 'flex' : 'none' }">
    <div class="fn-option">
      <div class="fn-close" @click="toggleMenu">
        <img src="@/assets/images/icons/close.svg" alt="close icon" />
      </div>
      <nav class="fn-navbar">
        <a href="#">Home</a>
        <a href="#" class="active">Order</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact Us</a>
      </nav>
    </div>
    <div class="fn-user">
      <button class="secondary-btn">Login</button>
      <button class="primary-btn">Register</button>
    </div>
  </div>
  <div class="fnnavbar-content">
    <div class="fn-logo">
      <img src="@/assets/FN-logo.svg" alt="foodnow logo" width="219px" height="65px" />
    </div>

    <nav class="fn-navbar">
      <a href="#">Home</a>
      <a href="#" class="active">Order</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Contact Us</a>
    </nav>

    <div class="fn-user">
      <button class="secondary-btn">Login</button>
      <button class="primary-btn">Register</button>
    </div>
  </div>
</template>