import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <small>&copy; Copyrights 2019 Stack. All Rights Reserved.</small>
        <nav>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </nav>
      </div>
    </footer>
  )
}