import axios from 'axios'

export const myAPI = axios.create({ baseURL: 'https://my-personal-website-backend.vercel.app' })
export const githubAPI = axios.create({ baseURL: 'https://api.github.com/' })
export const lineNotifyAPI = axios.create({
  baseURL:
    'https://script.google.com/macros/s/AKfycbxEmbhFRTe8cj_DVmOrLJIOnkjMVnECPGIbDT1IMYrDVw1OhCm6fP5-hA6XvakuaTUYXw/exec',
})
