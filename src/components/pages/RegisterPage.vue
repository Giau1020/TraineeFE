<script setup lang="ts">
import RegisterForm from '@/components/molecules/RegisterForm.vue'
</script>
<template>
  <div class="login-wrapper">
    <a-row justify="center" style="min-height: 100vh">
      <a-col :span="6">
        <a-card>
          <a-typography-title level="3" style="margin-bottom: 24px">ĐĂNG KÝ</a-typography-title>
          <RegisterForm />
        </a-card>
      </a-col>
    </a-row>
    <div class="header">
      <img class="logo" src="@/assets/logo.svg" alt="logo" />
      <div class="app-header1">
        <a-layout-header class="app-header flex items-center justify-between">
          <NavBar />
        </a-layout-header>
      </div>
    </div>
    <img class="decor-blue-circle" src="@/assets/blue-circle.svg" alt="floating decor" />
    <img class="decor-doctor" src="@/assets/login-doctor.svg" alt="floating decor" />
  </div>

  <router-link to="/register">Chưa có tài khoản? Đăng ký</router-link>
</template>

<style scoped>
.login-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('@/assets/background3.svg') center/cover no-repeat;
}
.login-wrapper .ant-row {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
  padding: 32px 28px;
  margin-left: auto;
}
.ant-card {
  width: 700px;
  height: fit-content;
  border-radius: 12px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
}
.login-wrapper .ant-col {
  margin-left: auto;
  margin-right: 300px;
}
.ant-layout-header {
  margin-left: auto;
}

.logo {
  position: absolute;
  top: 20px;
  left: 70px;
  width: 250px;
  z-index: 10;
  pointer-events: none;
  animation: floatIn 1s ease-out 1 forwards;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}
.decor-blue-circle {
  position: absolute;
  overflow: hidden;
  bottom: -350px;
  left: -365px;
  width: 90vw;
  pointer-events: none;
  z-index: 1;
  animation: floatIn 0.8s ease-out 1 forwards;
}
@keyframes floatIn {
  0% {
    transform: translateX(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.decor-doctor {
  position: absolute;
  bottom: -60px;
  left: 5px;
  width: 93vw;
  pointer-events: none;
  z-index: 2;
  animation: riseUp 0.8s ease-out 1 forwards;
}

@keyframes riseUp {
  from {
    transform: translateY(60px);
    opacity: 0;
  }
  to {
    transform: translateY(-65px);
    opacity: 1;
  }
}

/* ===== HEADER dính trên cùng ===== */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 150px; /* chiều cao header AntD mặc định */
  /* padding: 0 24px; */
  display: flex;
  flex-direction: row;
  z-index: 1000;
}
.app-header1 {
  position: fixed;
  top: 5%;
  width: 50%;
  right: 20px;
  height: 64px; /* chiều cao header AntD mặc định */
  z-index: 1000;
  background: none;
}
.app-header {
  padding: 0;
  background: none; /* không có nền */
  box-shadow: none; /* không có bóng */
  display: flex;

  align-items: space-around;
}
.ant-menu-overflow {
  gap: 26px;
  background: none;
  font-size: 20px;
  width: 70%;
  display: flex;
  justify-content: space-around;
}
.ant-typography {
  color: #1212ea;
  font-size: 20px;
  font-weight: bold;
  margin-left: auto;
}
.ant-card-body h1 {
  justify-content: center;
  display: flex;
}
/* Cột chứa card */
.login-wrapper .ant-col {
  width: 100%;
  max-width: 420px;
}

/* Card đăng nhập */
.ant-card {
  border-radius: 16px;
  margin-top: 80px;
  padding: 30px 24px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.9); /* nền trắng nhẹ có trong suốt */
  backdrop-filter: blur(10px); /* hiệu ứng mờ nền (glassmorphism) */
  transition: all 0.3s ease;
}
.ant-card-body h1 {
  text-align: center;
  font-weight: 900;
  color: #2f54eb;
  font-size: 30px;
  letter-spacing: 1px;
}

.ant-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
}

/* Tiêu đề */
.ant-typography h3 {
  text-align: center;
  font-weight: 600;
  color: #2f54eb;
  letter-spacing: 1px;
}
</style>
