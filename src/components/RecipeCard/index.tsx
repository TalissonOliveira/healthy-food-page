import Image from "next/image";

import styles from './styles.module.scss'

interface RecipeCardProps {
  imageUrl: string
  recipeName: string
}

export function RecipeCard({ imageUrl, recipeName }: RecipeCardProps) {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} />

      <div className={styles['card-infos']}>
        <h3>{recipeName}</h3>
        <button type="button">
          See Recipe
        </button>
      </div>
    </div>
  )
}