<script setup lang="ts">
import { Input } from 'ant-design-vue'
defineProps<{ modelValue: string }>()
defineEmits(['update:modelValue'])
</script>

<template>
  <Input class="input-big" :value="modelValue" @update:value="$emit('update:modelValue', $event)" />
</template>
<style scoped>
.input-big {
  font-size: 17px;
  padding: 10px 16px;
  height: 32px;
}
</style>
