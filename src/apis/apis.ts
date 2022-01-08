import { myAPI, githubAPI } from './axios'

const personalInfo = {
  getExperienceList: () => myAPI.get('/experience.json'),
  getGithubUser: () => githubAPI.get('/users/TSinChen'),
  getRepositoryList: () => githubAPI.get('/users/TSinChen/repos'),
}

export default { personalInfo }
