import dayjs from 'dayjs'

import styles from './style.module.scss'
import { Repository } from '../../../../type/personalInfo'

type Props = {
  repository: Repository
}

const Card = ({ repository }: Props) => {
  return (
    <li className={styles.card}>
      <div className={styles.card__title} title={repository.name}>
        {repository.name}
      </div>
      <div className={styles.card__description}>{repository.description}</div>
      <div className={styles.card__footer}>
        <div className={styles.card__footer__link}>
          <a href={repository.html_url} target="_blank" rel="noreferrer">
            GitHub 連結
          </a>
          {repository.homepage && (
            <a href={repository.homepage} target="_blank" rel="noreferrer">
              作品連結
            </a>
          )}
        </div>
        <div className={styles.card__footer__date}>
          <i>創建於 {dayjs(repository.created_at).format('YYYY/MM/DD')}</i>
        </div>
      </div>
    </li>
  )
}

export default Card
