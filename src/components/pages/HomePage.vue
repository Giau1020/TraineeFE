<script setup lang="ts">
/* Lấy tên người dùng (nếu đã đăng nhập) để chào */
import { useAuth } from '@/composables/useAuth'
import { onMounted } from 'vue'

const auth = useAuth()

/* Ví dụ: gọi API lấy thống kê khi vừa vào trang */
onMounted(async () => {
  /* await fetchDashboard();  // bạn cắm API thật ở đây */
})
</script>

<template>
  <!-- khung layout Ant Design -->
  <a-layout class="page-wrapper">
    <a-typography-title level="2" class="mb-4">
      Chào {{ auth.user?.name || 'bạn' }} 👋
    </a-typography-title>

    <!-- Hàng thống kê – placeholder demo -->
    <a-row gutter="16">
      <!-- Card 1 -->
      <a-col :span="6">
        <a-card>
          <template #title>Tổng đơn</template>
          <a-statistic :value="128" suffix="đơn" />
        </a-card>
      </a-col>

      <!-- Card 2 -->
      <a-col :span="6">
        <a-card>
          <template #title>Doanh thu hôm nay</template>
          <a-statistic :value="5860000" suffix="₫" :precision="0" />
        </a-card>
      </a-col>

      <!-- Card 3 -->
      <a-col :span="6">
        <a-card>
          <template #title>Khách mới</template>
          <a-statistic :value="12" suffix="người" />
        </a-card>
      </a-col>

      <!-- Card 4 -->
      <a-col :span="6">
        <a-card>
          <template #title>Tồn kho thấp</template>
          <a-statistic :value="4" suffix="mặt hàng" />
        </a-card>
      </a-col>
    </a-row>

    <a-divider />

    <a-typography-title level="4">Thông báo</a-typography-title>
    <a-empty description="Chưa có thông báo mới" />
  </a-layout>
</template>

<style scoped>
.page-wrapper {
  padding: 24px;
  /* background: #fff;/ */
}
.mb-4 {
  margin-bottom: 16px;
}
</style>
