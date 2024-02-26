import { env } from '@/env'

export const api = (path: string, init?: RequestInit) => {
  const baseUrl = env.APP_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, init)
} 