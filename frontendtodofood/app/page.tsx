import { getAllPromotions } from '@/services/entities/promotion/promotion.service';
import Home from './(navigation)/home/Home';


async function getData() {
  return await getAllPromotions()
}

export default async function HomePage() {

  const promotions = await getData()

  const today = new Date().toLocaleDateString("en-CA")
  
  
  const actuallyPromotions = promotions.filter((promo) => 
    String(promo.finallyDate) === today
  )

  return (
    <Home actuallyPromotions={actuallyPromotions}/>
  );
}
