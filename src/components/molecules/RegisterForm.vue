<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { message, Form, InputPassword, Radio, DatePicker, Select } from 'ant-design-vue'

import { useAuth } from '@/composables/useAuth'
import BaseInput from '@/components/atoms/BaseInput.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

/** =========================
 *  Khai báo kiểu dữ liệu
 *  ========================= */
type UserStatus = 'active' | 'inactive'

interface RegisterForm {
  username: string
  password: string
  confirmPassword: string // field “confirm”
  fullname: string
  gender: boolean | null
  birth: string | null // ISO-date string từ DatePicker
  status: UserStatus
  idCard: string
  loading: boolean
}

/** =========================
 *  State & router
 *  ========================= */
const router = useRouter()
const auth = useAuth()

const form = reactive<RegisterForm>({
  username: '',
  password: '',
  confirmPassword: '',
  fullname: '',
  gender: null,
  birth: null,
  status: 'active',
  idCard: '',
  loading: false,
})

/** =========================
 *  Validate confirm password
 *  ========================= */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validateConfirm(_: any, value: string) {
  if (!value) return Promise.reject('Vui lòng nhập lại mật khẩu')
  if (value !== form.password) return Promise.reject('Mật khẩu không khớp')
  return Promise.resolve()
}

/** =========================
 *  Quy tắc form
 *  ========================= */
const rules = {
  username: [{ required: true, message: 'Username không được để trống' }],
  password: [
    { required: true, message: 'Mật khẩu không được để trống' },
    { min: 6, message: 'Mật khẩu phải dài ≥ 6 ký tự' },
  ],
  confirmPassword: [{ validator: validateConfirm }],
  fullname: [{ required: true, message: 'Họ tên không được để trống' }],
  gender: [{ required: true, message: 'Chọn giới tính' }],
  birth: [{ required: true, message: 'Chọn ngày sinh' }],
  status: [{ required: true, message: 'Chọn trạng thái' }],
  idCard: [{ required: true, message: 'CMND/CCCD không được để trống' }],
}

/** =========================
 *  Submit
 *  ========================= */
async function onSubmit() {
  form.loading = true
  try {
    await auth.register({
      username: form.username,
      password: form.password,
      fullname: form.fullname,
      gender: form.gender!,
      birth: form.birth!,
      status: form.status,
      idCard: form.idCard,
    })
    message.success('Đăng ký thành công!')
    router.replace('/login')
  } catch {
    message.error('Đăng ký thất bại')
  } finally {
    form.loading = false
  }
}
</script>

<template>
  <Form
    class="register-form"
    layout="vertical"
    :model="form"
    :rules="rules"
    @submit.prevent="onSubmit"
  >
    <!-- Username -->
    <Form.Item name="username" label="Username">
      <BaseInput v-model="form.username" placeholder="Username" />
    </Form.Item>

    <!-- Password -->
    <Form.Item name="password" label="Mật khẩu">
      <InputPassword v-model:value="form.password" placeholder="Mật khẩu" />
    </Form.Item>

    <!-- Full name -->
    <Form.Item name="fullname" label="Họ và tên">
      <BaseInput v-model="form.fullname" placeholder="Họ và tên" />
    </Form.Item>

    <!-- Confirm password -->
    <Form.Item name="confirmPassword" label="Xác nhận mật khẩu">
      <InputPassword v-model:value="form.confirmPassword" placeholder="Nhập lại mật khẩu" />
    </Form.Item>

    <!-- Gender -->
    <Form.Item name="gender" label="Giới tính">
      <Radio.Group v-model:value="form.gender">
        <Radio :value="true">Nam</Radio>
        <Radio :value="false">Nữ</Radio>
      </Radio.Group>
    </Form.Item>

    <!-- Birth date -->
    <Form.Item name="birth" label="Ngày sinh">
      <DatePicker v-model:value="form.birth!" format="DD/MM/YYYY" style="width: 100%" />
    </Form.Item>

    <!-- ID Card -->
    <Form.Item class="full-row" name="idCard" label="CMND/CCCD">
      <BaseInput v-model="form.idCard" placeholder="Số CMND/CCCD" />
    </Form.Item>

    <!-- Submit button -->
    <BaseButton
      class="btn-submit full-row"
      block
      type="primary"
      :loading="form.loading"
      html-type="submit"
    >
      Đăng ký
    </BaseButton>
    <router-link class="full-row link-login" to="/login">Đã có tài khoản? Đăng nhập</router-link>
  </Form>
</template>

<style scoped>
.register-form .link-login {
  justify-self: center;
  font-size: 14px;
  margin-top: 4px;
  color: #4096ff; /* tuỳ theme */
  cursor: pointer;
}
.form {
  text-align: center;
}
.register-form {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 cột */
  column-gap: 24px;
  row-gap: 12px;
}

/* Phần tử chiếm trọn hàng */
.register-form .full-row {
  grid-column: 1 / -1; /* từ cột 1 đến cột cuối */
}

/* Đưa nút ra giữa hàng */
.register-form .btn-submit {
  width: 200px; /* giữ kích thước mong muốn */
  justify-self: center; /* căn giữa theo trục ngang */
}

/* -------- Lưới 2 cột -------- */
.register-form {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 cột bằng nhau */
  column-gap: 24px; /* khoảng cách cột */
  row-gap: 12px; /* khoảng cách dòng */
}

/* -------- Đưa nút submit chạy ngang -------- */
.register-form .btn-submit {
  grid-column: 1 / -1; /* chiếm full 2 cột */
  width: 200px; /* giữ size như cũ */
  justify-self: center; /* căn giữa */
}
</style>
