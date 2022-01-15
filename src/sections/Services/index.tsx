import Image from "next/image";
import servicesImg from '../../../public/images/services_image.svg'

import styles from './styles.module.scss'

export function ServicesSection() {
  return (
    <section className={styles.servicesContainer}>
      <Image src={servicesImg} />

      <div className={styles.servicesContent}>
        <h2>The best services ready To serve you</h2>

        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>

        <button type="button">
          Know More
        </button>
      </div>
    </section>
  )
}