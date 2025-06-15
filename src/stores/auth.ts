import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { http } from '@/lib/http'

interface User {
  id: number
  username: string
}
export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const user = ref<User | null>(JSON.parse(localStorage.getItem('user') || 'null'))

  const isLoggedIn = computed(() => !!token.value)

  async function login(username: string, password: string) {
    const { data } = await http.post(`/login`, { username, password }) // BE trả { token, user }
    token.value = data.token
    user.value = { id: data.id, username: data.username }

    localStorage.setItem('token', token.value ?? '')
    localStorage.setItem('user', JSON.stringify(user.value))
  }

  function logout() {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return { token, user, isLoggedIn, login, logout }
})
