<script setup lang="ts">
import NavItem from '@/components/atoms/NavItem.vue';

const props = defineProps<{
  items: { to: string; label: string }[];
}>();
</script>

<template>
  <!-- menu ngang, bo viền dưới -->
  <a-menu mode="horizontal" style="border-bottom: none">
    <NavItem
      v-for="item in props.items"
      :key="item.to"
      :to="item.to"
      :label="item.label"
    />
  </a-menu>
</template>
