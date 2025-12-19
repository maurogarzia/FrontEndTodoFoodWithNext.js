import { getAllPromotions } from '@/services/entities/promotion/promotion.service';
import Home from './(navigation)/home/Home';
import { IPromotion } from '@/types/models/Promotions.model';

async function getData() {
  return await getAllPromotions()
}

export default async function HomePage() {

  const promotions = await getData()

  const today = new Date().toLocaleDateString("en-CA")
  
  console.log(today);
  
  const actuallyPromotions = promotions.filter((promo) => 
    String(promo.finallyDate) === today
  )

  return (
    <Home actuallyPromotions={actuallyPromotions}/>
  );
}
