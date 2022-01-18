import Image from "next/image";

import membershipImg from '../../../public/images/membership_image.svg'

import styles from './styles.module.scss'

export function Membership() {
  return (
    <section className={styles.membershipContainer}>
      <div className={styles.membershipContent}>
        <h2>Join our membership to get special offer</h2>

        <div className={styles.inputContainer}>
          <input type="email" placeholder="Enter your email address" />
          <button type="button">Join</button>
        </div>
      </div>

      <Image src={membershipImg} />
    </section>
  )
}