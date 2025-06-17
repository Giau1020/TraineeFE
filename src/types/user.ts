/** Trạng thái người dùng */
export type UserStatus = 'active' | 'inactive'

/** Kiểu User chung dùng khắp FE */
export interface User {
  /** Khoá chính từ DB */
  id: number
  /** Tên đăng nhập (unique) */
  username: string
  /** Họ tên đầy đủ */
  fullname: string
  /** true = Nam, false = Nữ (tuỳ backend quy ước) */
  gender: boolean
  /** Ngày sinh ISO-8601, ex: "1999-12-31" */
  birth: string
  /** 'active' | 'inactive' */
  status: UserStatus
  /** Số CMND/CCCD hoặc Passport */
  idCard: string
}
