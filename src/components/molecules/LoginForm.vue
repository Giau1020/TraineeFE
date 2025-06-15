<script setup lang="ts">
import { reactive } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter, useRoute } from 'vue-router'
import { message, Form, InputPassword } from 'ant-design-vue'
// import BaseInput from '@/components/atoms/BaseInput.vue'
const auth = useAuth()
const router = useRouter()
const route = useRoute()

const form = reactive({
  email: '',
  password: '',
  loading: false,
})

async function onSubmit() {
  form.loading = true
  try {
    await auth.login(form.email, form.password)
    message.success('Đăng nhập thành công!')
    router.replace((route.query.redirect as string) || '/')
  } catch {
    message.error('Đăng nhập thất bại')
  } finally {
    form.loading = false
  }
}
</script>

<template>
  <Form @submit.prevent="onSubmit" :model="form">
    <Form.Item name="username" :rules="[{ required: true, message: 'username không hợp lệ' }]">
      <BaseInput v-model="form.email" placeholder="Username" />
    </Form.Item>

    <Form.Item name="password" :rules="[{ required: true, message: 'Nhập mật khẩu' }]">
      <InputPassword class="input-big" v-model:value="form.password" placeholder="Mật khẩu" />
    </Form.Item>

    <BaseButton class="btn-login" block type="primary" :loading="form.loading" html-type="submit">
      Đăng nhập
    </BaseButton>
  </Form>
</template>
<style scoped>
form {
  text-align: center;
}
.input-big {
  font-size: 15px;
  padding: 10px 16px;
  height: 52px;
}
.btn-login {
  font-size: 15px;
  width: 200px;
  height: 52px;
  padding: 0 16px;
}
</style>
