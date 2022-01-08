import { Fragment, useState, useEffect } from 'react'
import dayjs from 'dayjs'

import styles from './style.module.scss'
import apis from '../../../apis/apis'
import { RepositoryList } from '../../../type/personalInfo'
import Card from './Card/Card'

const Portfolios = () => {
  const [repositoryList, setRepositoryList] = useState<RepositoryList>([])

  const getRepositoryList = async () => {
    try {
      const data = await apis.personalInfo.getRepositoryList()
      const repositoryList: RepositoryList = data.data
      repositoryList.sort((a, b) => (dayjs(a.created_at).isBefore(dayjs(b.created_at)) ? 1 : -1))
      setRepositoryList(repositoryList)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getRepositoryList()
  }, [])

  return (
    <Fragment>
      <div className={styles.portfolios__source}>
        <span>以下內容皆來自 </span>
        <a href="https://github.com/TSinChen" target="_blank" rel="noreferrer">
          我的 GitHub 頁面
        </a>
      </div>
      <ul className={styles.portfolios}>
        {repositoryList.map((repository) => (
          <Card key={repository.id} repository={repository} />
        ))}
      </ul>
    </Fragment>
  )
}

export default Portfolios
