import styles from './style.module.scss'
import ICON_HTML from '../../../assets/image/icons/html.png'
import ICON_CSS from '../../../assets/image/icons/css.png'
import ICON_JS from '../../../assets/image/icons/javascript.png'
import ICON_GIT from '../../../assets/image/icons/git.svg'
import ICON_REACT from '../../../assets/image/icons/react.png'
import ICON_SASS from '../../../assets/image/icons/sass.png'

const SKILLS = [
  {
    title: 'HTML',
    content: '擅長寫出合乎邏輯的標籤、排版',
    icon: ICON_HTML,
  },
  {
    title: 'CSS',
    content: '使用 BEM 設計模式，方便管理樣式',
    icon: ICON_CSS,
  },
  {
    title: 'Javascript',
    content: '熟練 API 串接並進行資料操作',
    icon: ICON_JS,
  },
  {
    title: 'Git',
    content: '使用 Git 進行版本控制、團隊協作',
    icon: ICON_GIT,
  },
  {
    title: 'Sass',
    content: '配合 CSS 的 BEM 設計模式及變數等功能，增加開發效率',
    icon: ICON_SASS,
  },
  {
    title: 'React',
    content: '熟悉 Redux、Router、Hooks API 等常用功能',
    icon: ICON_REACT,
  },
]

const Skills = () => {
  return (
    <ul className={styles.skills}>
      {SKILLS.map((skill) => (
        <li key={skill.title} className={styles.skills__item}>
          <img src={skill.icon} className={styles.skills__item__icon} />
          <p className={styles.skills__item__description}>{skill.content}</p>
        </li>
      ))}
    </ul>
  )
}

export default Skills
