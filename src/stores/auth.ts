import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { http } from '@/lib/http'

interface User {
  id: number
  username: string
}
/** Kiểu dữ liệu gửi lên BE khi đăng ký */
export interface RegisterPayload {
  username: string
  password: string // plain text, BE tự hash
  fullname: string
  gender: boolean // true = nam, false = nữ
  birth: string | Date // ISO-date string hay Date đều được
  status: 'active' | 'inactive'
  idCard: string
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const user = ref<User | null>(JSON.parse(localStorage.getItem('user') || 'null'))
  const loading = ref(false)

  const isLoggedIn = computed(() => !!token.value)

  async function login(username: string, password: string) {
    const { data } = await http.post(`/login`, { username, password }) // BE trả { token, user }
    token.value = data.token
    user.value = { id: data.id, username: data.username }

    localStorage.setItem('token', token.value ?? '')
    localStorage.setItem('user', JSON.stringify(user.value))
  }

  /* Action: register ------------ */
  async function register(payload: RegisterPayload) {
    loading.value = true
    try {
      // ① Gửi request đăng ký
      //    (Nếu server trả về token + user ngay):
      // const { data } = await http.post<AuthResponse>('/auth/register', payload)
      // token.value = data.token
      // user.value  = data.user
      // http.defaults.headers.Authorization = `Bearer ${data.token}`

      // ② Trường hợp phổ biến: server trả “201 Created” không kèm token
      await http.post('/auth/register', payload)
      // -> Đăng nhập luôn để lấy token
      await login(payload.username, payload.password)
    } finally {
      loading.value = false
    }
  }

  function logout() {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return { token, user, isLoggedIn, login, register, logout }
})
