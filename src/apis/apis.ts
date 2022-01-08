import { myAPI, githubAPI, lineNotifyAPI } from './axios'

const personalInfo = {
  getExperienceList: () => myAPI.get('/experience.json'),
  getGithubUser: () => githubAPI.get('/users/TSinChen'),
  getRepositoryList: () => githubAPI.get('/users/TSinChen/repos'),
}

const contact = {
  postContact: (formData: FormData) => lineNotifyAPI.post('', formData),
}

export default { personalInfo, contact }
