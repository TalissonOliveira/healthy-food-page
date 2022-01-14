import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <span className={styles.logo}>Healthy Food</span>

        <nav>
          <a href="#">HEALTHY RECIPES</a>
          <a href="#">BLOG</a>
          <a href="#">JOIN</a>
          <a href="#" className={styles.signUpButton}>REGISTER</a>
        </nav>
      </div>
    </header>
  )
}