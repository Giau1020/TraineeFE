<script setup lang="ts">
import NavMenu from '@/components/molecules/NavMenu.vue'

/* danh sách mục điều hướng */
const navItems = [
  { to: '/', label: 'Trang chủ' },
  { to: '/about', label: 'Về chúng tôi' },
  { to: '/help', label: 'Trợ giúp' },
]
</script>

<template>
  <NavMenu :items="navItems" />
</template>
