<script setup lang="ts">
import { reactive } from 'vue';
import { message } from 'ant-design-vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const auth   = useAuthStore();
const router = useRouter();
const route  = useRoute();

const form = reactive({
  email   : '',
  password: '',
  loading : false,
});

async function onSubmit() {
  form.loading = true;
  try {
    await auth.login(form.email, form.password);
    message.success('Đăng nhập thành công!');
    router.replace((route.query.redirect as string) || '/');
  } catch (err: any) {
    message.error(err.response?.data.message || 'Đăng nhập thất bại');
  } finally {
    form.loading = false;
  }
}
</script>

<template>
  <a-row justify="center" align="middle" style="min-height: 100vh">
    <a-col :span="6">
      <a-card title="Đăng nhập">
        <a-form @submit.prevent="onSubmit" :model="form">
          <a-form-item name="email" required>
            <a-input v-model:value="form.email" placeholder="Email" />
          </a-form-item>
          <a-form-item name="password" required>
            <a-input-password v-model:value="form.password" placeholder="Mật khẩu" />
          </a-form-item>
          <a-button type="primary" html-type="submit" :loading="form.loading" block>
            Đăng nhập
          </a-button>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>
