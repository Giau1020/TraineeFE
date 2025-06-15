<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps<{
  to: string
  label: string
}>()

/* xác định route hiện tại để highlight */
const route = useRoute()
</script>

<template>
  <!-- a-menu-item của AntD -->
  <a-menu-item :key="props.to" :class="{ 'ant-menu-item-selected': route.path === props.to }">
    <RouterLink :to="props.to">{{ props.label }}</RouterLink>
  </a-menu-item>
</template>
