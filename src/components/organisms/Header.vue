<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'

defineOptions({
  name: 'AppHeader',
})

const auth = useAuth()
const router = useRouter()

function handleLogout() {
  auth.logout()
  message.info('Đã đăng xuất')
  router.push('/login')
}
</script>

<template>
  <a-layout-header class="header">
    <h2 class="title">My App</h2>
    <a-button v-if="auth.isLoggedIn" @click="handleLogout">Đăng xuất</a-button>
  </a-layout-header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #001529; /* màu header mặc định AntD dark */
  padding: 0 24px;
}
.title {
  color: #fff;
  margin: 0;
  font-size: 20px;
}
</style>
