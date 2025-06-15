<script setup lang="ts">
import { Button } from 'ant-design-vue'
defineProps<{ type?: 'primary' | 'default'; loading?: boolean }>()
</script>

<template>
  <Button :type="type" :loading="loading">
    <slot />
  </Button>
</template>
