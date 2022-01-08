import { myAPI, githubAPI } from './axios'

const personalInfo = {
  getExperience: () => axios.get('/experience.json'),
  getGithubUser: () => githubAPI.get('/users/TSinChen'),
  getRepositoryList: () => githubAPI.get('/users/TSinChen/repos'),
}

export default { personalInfo }
