import axios from './axios'

const personalInfo = {
  getExperience: () => axios.get('/experience.json'),
}

export default { personalInfo }
