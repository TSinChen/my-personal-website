import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import styles from './style.module.scss'
import LOGO_3DRENS from '../../../assets/image/3drens.png'
import apis from '../../../apis/apis'
import { ExperienceList } from '../../../type/personalInfo'

const Experience = () => {
  const [experience, setExperience] = useState<ExperienceList>([])

  const getExperience = async () => {
    try {
      const data = await apis.personalInfo.getExperience()
      const experienceList: ExperienceList = data.data
      setExperience(experienceList)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getExperience()
  }, [])

  return (
    <ul className={styles.experience}>
      {experience.map((career) => (
        <li className={styles.experience__item} key={career.job + career.company}>
          <img className={styles.experience__item__logo} src={LOGO_3DRENS} />
          <div className={styles.experience__item__text}>
            <div className={styles.experience__item__text__title}>
              <p className={styles.experience__item__text__title__job}>{career.job}</p>
              <p className={styles.experience__item__text__title__company}>{career.company}</p>
            </div>
            <p className={styles.experience__item__text__time}>
              {`${dayjs(career.startTime).format('YYYY/MM')} ~ ${
                career.endTime ? dayjs(career.endTime).format('YYYY/MM') : '至今'
              }`}
            </p>
            {career.description.length > 1
              ? (
              <ul className={styles.experience__item__text__description}>
                {career.description.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
                )
              : (
              <p className={styles.experience__item__text__description}>{career.description}</p>
                )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Experience
