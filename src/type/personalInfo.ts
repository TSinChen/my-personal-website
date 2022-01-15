export type Experience = {
  job: string
  company: string
  startTime: string
  endTime: string
  description: string[]
  iconLink: string
}

export type ExperienceList = Experience[]

export type Repository = {
  id: number
  name: string
  description: string
  // eslint-disable-next-line camelcase
  html_url: string
  homepage: string
  // eslint-disable-next-line camelcase
  created_at: string
  // eslint-disable-next-line camelcase
  updated_at: string
  topics: string[]
}

export type RepositoryList = Repository[]

export type GithubUser = {
  // eslint-disable-next-line camelcase
  html_url: string
}
