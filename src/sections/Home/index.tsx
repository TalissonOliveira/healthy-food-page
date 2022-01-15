import { CgSearch } from 'react-icons/cg'

import styles from './home.module.scss'

export function HomeSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Ready for Trying a new recipe?</h1>

        <div className={styles.search}>
          <input type="text" placeholder="Search healthy recipes" />
          <button type="button">
            <CgSearch />
          </button>
        </div>
      </div>

      <img src="/images/illustration.svg" alt="Illustration" />
    </section>
  )
}