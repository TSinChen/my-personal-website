import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import styles from './style.module.scss'
import LOGO_3DRENS from '../../../assets/image/3drens.png'
import apis from '../../../apis/apis'
import { ExperienceList } from '../../../type/personalInfo'

const Experience = () => {
  const [experienceList, setExperienceList] = useState<ExperienceList>([])

  const getExperience = async () => {
    try {
      const result = await apis.personalInfo.getExperienceList()
      const experienceList: ExperienceList = result.data
      setExperienceList(experienceList)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getExperience()
  }, [])

  return (
    <ul className={styles.experience}>
      {experienceList.map((experience) => (
        <li className={styles.experience__item} key={experience.job + experience.company}>
          <img className={styles.experience__item__logo} src={LOGO_3DRENS} />
          <div className={styles.experience__item__text}>
            <div className={styles.experience__item__text__title}>
              <p className={styles.experience__item__text__title__job}>{experience.job}</p>
              <p className={styles.experience__item__text__title__company}>{experience.company}</p>
            </div>
            <p className={styles.experience__item__text__time}>
              {`${dayjs(experience.startTime).format('YYYY/MM')} ~ ${
                experience.endTime ? dayjs(experience.endTime).format('YYYY/MM') : '至今'
              }`}
            </p>
            {experience.description.length > 1
              ? (
              <ul className={styles.experience__item__text__description}>
                {experience.description.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
                )
              : (
              <p className={styles.experience__item__text__description}>{experience.description}</p>
                )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Experience
