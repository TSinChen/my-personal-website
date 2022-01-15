import { Fragment, useState, useEffect } from 'react'
import dayjs from 'dayjs'

import styles from './style.module.scss'
import apis from '../../../apis/apis'
import { RepositoryList } from '../../../type/personalInfo'
import Card from './Card/Card'
import Button from '../../Utils/Button/Button'

const Portfolios = () => {
  const [repositoryList, setRepositoryList] = useState<RepositoryList>([])
  const [pinnedRepositoryList, setPinnedRepositoryList] = useState<RepositoryList>([])
  const [unpinnedRepositoryList, setUnpinnedRepositoryList] = useState<RepositoryList>([])
  const [showMore, setShowMore] = useState(false)

  const getRepositoryList = async () => {
    try {
      const result = await apis.personalInfo.getRepositoryList()
      const repositoryList: RepositoryList = result.data
      repositoryList.sort((a, b) => (dayjs(a.created_at).isBefore(dayjs(b.created_at)) ? 1 : -1))
      setRepositoryList(repositoryList)
    } catch (error) {
      console.error(error)
    }
  }

  const getPinnedRepositoryList = (repositoryList: RepositoryList) => {
    const pinned = []
    const unpinned = []
    for (const repo of repositoryList) {
      if (!repo.topics.length) {
        unpinned.push(repo)
      } else if (repo.topics.find((topic) => topic === 'portfolio')) {
        pinned.push(repo)
      }
    }
    setPinnedRepositoryList(
      pinned.sort((a, b) => (dayjs(a.updated_at).isBefore(dayjs(b.updated_at)) ? -1 : 1)),
    )
    setUnpinnedRepositoryList(unpinned)
  }

  useEffect(() => {
    getRepositoryList()
  }, [])

  useEffect(() => {
    if (!repositoryList.length) return
    getPinnedRepositoryList(repositoryList)
  }, [repositoryList])

  return (
    <Fragment>
      <div className={styles.portfolios__source}>
        <span>以下內容皆來自 </span>
        <a href="https://github.com/TSinChen" target="_blank" rel="noreferrer">
          我的 GitHub 頁面
        </a>
      </div>
      <ul className={styles.portfolios}>
        {pinnedRepositoryList.map((repository) => (
          <Card key={repository.id} repository={repository} />
        ))}
        {showMore &&
          unpinnedRepositoryList.map((repository) => <Card key={repository.id} repository={repository} />)}
      </ul>
      <Button theme="dark" onClick={() => setShowMore(!showMore)}>
        {showMore ? '顯示較少' : '顯示更多'}
      </Button>
    </Fragment>
  )
}

export default Portfolios
