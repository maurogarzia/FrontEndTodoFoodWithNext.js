import { getAllPromotions } from '../../../services/entities/promotion/promotion.service'
import style from '../EntityStyle.module.css'
import Card from '../../../components/Card/Card'

async function getData() {
  return await getAllPromotions()
}

async function Promotions() {

  const promotions = await getData()

  return (
    <div className={style.containerPrincipal}>

      <p className={style.title}>Promociones</p>

      <div className={style.cards}>
        {promotions.map((promotion) => 
          <Card key={promotion.id} name={promotion.name} image={promotion.image} entity={promotion}/>
        )}
      </div>
      
    </div>
  )
}

export default Promotions