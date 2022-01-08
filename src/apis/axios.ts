import axios from 'axios'

export const myAPI = axios.create({ baseURL: 'https://my-personal-website-backend.vercel.app' })
export const githubAPI = axios.create({ baseURL: 'https://api.github.com/' })
