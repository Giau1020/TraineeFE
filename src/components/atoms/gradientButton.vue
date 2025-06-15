<template>
  <a-space>
    <a-button type="primary" size="large" class="gradient-button">
      <template>
        <AntDesignOutlined />
      </template>
      <span>Đăng nhập</span>
    </a-button>

    <!-- <a-button size="large">Button</a-button> -->
  </a-space>
</template>

<script setup lang="ts">
import { AntDesignOutlined } from '@ant-design/icons-vue'
</script>

<style scoped>
.gradient-button {
  position: relative;
  overflow: hidden;
  border: none;
}

/* lớp gradient nền */
.gradient-button::before {
  content: '';
  background: linear-gradient(135deg, #6253e1, #04befe);
  position: absolute;
  inset: 0;
  z-index: 0;
  transition: opacity 0.3s;
  border-radius: inherit;
  pointer-events: none;
}

.gradient-button > span {
  position: relative;
  z-index: 1;
}
.btn-content,
.gradient-button .anticon {
  position: relative;
  z-index: 1;
}

.gradient-button:hover::before {
  opacity: 0;
}
</style>
