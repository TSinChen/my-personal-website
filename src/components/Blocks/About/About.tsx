import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

import styles from './style.module.scss'
import { RootReducerStateTypes } from '../../../type/reducers/rootReducer'

const About = () => {
  const photoLink = useSelector((state: RootReducerStateTypes) => state.photo.link)

  return (
    <div className={styles.about}>
      <img src={photoLink} className={styles.about__photo} />
      <div className={styles.about__text}>
        <p className={styles.about__text__title}>關於我</p>
        <p className={styles.about__text__content}>
          我是陳天行，今年 {dayjs().diff('1999-01-08', 'year')} 歲，畢業於高雄科技大學資訊工程系。
          <br />
          自學前端至今大約 {dayjs().diff('2020-09-01', 'year')}{' '}
          年多，目前仍持續學習，期許自己成為一名優秀的開發者。
        </p>
      </div>
    </div>
  )
}

export default About
