import { RecipeCard } from '../../components/RecipeCard'

import styles from './styles.module.scss'

import food_1 from '../../../public/images/food_1.svg'
import food_2 from '../../../public/images/food_2.svg'
import food_3 from '../../../public/images/food_3.svg'
import food_4 from '../../../public/images/food_4.svg'

export function RecipesSection() {
  const recipes = [
    {
      image: food_1,
      name: 'Broccoli Salad with Bacon'
    },
    {
      image: food_2,
      name: 'Classic Beef Burgers'
    },
    {
      image: food_3,
      name: 'Classic Potato Salad'
    },
    {
      image: food_4,
      name: 'Cherry Cobbler on the Grill'
    },
  ]

  return (
    <section className={styles.recipesContainer}>
      <h2>Our Best Recipes</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>

      <div className={styles.cards}>
        {recipes.map(recipe => (
          <RecipeCard imageUrl={recipe.image} recipeName={recipe.name} />
        ))}
      </div>
    </section>
  )
}