import { CarouselCard } from '../../components/CarouselCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './styles.module.scss'

import postImage_1 from '../../../public/images/blog_image_1.svg'
import postImage_2 from '../../../public/images/blog_image_2.svg'
import postImage_3 from '../../../public/images/blog_image_3.svg'
import postImage_4 from '../../../public/images/blog_image_4.svg'

import author_1 from '../../../public/images/author_1.png'
import author_2 from '../../../public/images/author_2.png'
import author_3 from '../../../public/images/author_3.png'
import author_4 from '../../../public/images/author_4.png'

export function BlogSection() {
  const postsData = [
    {
      postImage: postImage_1,
      postTitle: 'Quick-start guide to nuts and seeds',
      authorPhoto: author_1,
      authorName: 'Kevin Ibrahim',
    },
    {
      postImage: postImage_2,
      postTitle: 'Nutrition: Tips for Improving Your Health',
      authorPhoto: author_2,
      authorName: 'Mike Jackson',
    },
    {
      postImage: postImage_3,
      postTitle: 'The top 10 benefits of eating healthy',
      authorPhoto: author_3,
      authorName: 'Bryan McGregor',
    },
    {
      postImage: postImage_4,
      postTitle: 'What Makes a Healthy Diet?',
      authorPhoto: author_4,
      authorName: 'Jashua',
    }
  ]

  return (
    <section className={styles.blogContainer}>
      <div className={styles.blogContent}>
        <h2>Read Our Blog</h2>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        <Swiper
          spaceBetween={24}
          slidesPerView={'auto'}
          navigation
          draggable={true}
          pagination={{ clickable: true }}
          className={styles.swiper2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {postsData.map(post => (
            <SwiperSlide className={styles['swiper-slide']}>
                <CarouselCard
                  postImage={post.postImage}
                  postTitle={post.postTitle}
                  authorPhoto={post.authorPhoto}
                  authorName={post.authorName}
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}