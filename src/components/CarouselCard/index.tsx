import Image from 'next/image'

import styles from './styles.module.scss'

interface CarouselCardProps {
  postImage: string
  postTitle: string
  authorName: string
  authorPhoto: string | StaticImageData
}

export function CarouselCard({
    postImage,
    postTitle,
    authorPhoto,
    authorName
}: CarouselCardProps) {
  return (
    <div className={styles.cardContainer}>
      <Image src={postImage} />

      <div className={styles.cardInfos}>
        <h3>{postTitle}</h3>
        <div className={styles.authorInfos}>
          <Image src={authorPhoto} />
          <span>{authorName}</span>
        </div>
      </div>
    </div>
  )
}