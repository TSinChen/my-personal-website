import styles from './style.module.scss'

const MainPage = () => {
  return (
    <div className={styles.title}>
      <div className={styles.title__primary}>嗨，我是天行！</div>
      <div className={styles.title__secondary}>前端工程師</div>
    </div>
  )
}

export default MainPage
