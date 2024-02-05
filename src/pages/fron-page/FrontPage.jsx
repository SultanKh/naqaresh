import { lazy, useCallback, useMemo, useState } from 'react'
import CoverScreen from '../../components/cover-screen/CoverScreen'
import FoodCartButton from '../../components/food-cart/FoodCartButton'
import FoodSearch from '../../components/food-search/FoodSearch'
import FoodSection from '../../components/food-section/FoodSection'
import { BBQ_SALADS, OUR_SPECIALTY, SALADS } from '../../data/menu'
import './FrontPage.scss'
import PlateCard from '../../components/plate-card/PlateCard'
import MatchedFood from '../../components/matched-foods/MatchedFoods'
import PaymentForm from '../../components/payment-form/PaymentForm'
import CartBag from '../../components/cart-bag/CartBag'

const SaladSection = lazy(() => import('../../components/salad-section/SaladSection'))


const FrontPage = () => {

    const [searchedFood, setSearchedFood] = useState('')

    const regexText = new RegExp(searchedFood,);

    const allFoodCombined = useMemo(() => SALADS.concat(OUR_SPECIALTY).concat(BBQ_SALADS), [])
    const matchedFood = allFoodCombined.filter(item => regexText.test(item.ArabicName) || regexText.test(item.Category) || regexText.test(item.Description))

    const [openCart, setOpenCart] = useState(false);
    const [openPayment, setOpenPayment] = useState(false);

    return <div className='FrontPage'>
        <CoverScreen />
        <div className='search-container'>
            <FoodSearch setSearchedFood={setSearchedFood} />
        </div>
        {searchedFood === '' ? <>
            <div className='food-section-container'>

                <div className='title-section' dir='rtl'>
                    <h1>نقاريشنا</h1>
                </div>
                <FoodSection />
            </div>

            <div className='salad-section-section'>
                <SaladSection />
            </div>
        </>
            : <div className='matched-section-container'>
                <MatchedFood matchedFood={matchedFood} />
            </div>
        }


        <FoodCartButton setOpenCart={setOpenCart} openCart={openCart}/>
        {openCart && <CartBag setOpenCart={setOpenCart} setOpenPayment={setOpenPayment}/>}
        {openPayment && <PaymentForm setOpenPayment={setOpenPayment}/>}
    </div>
}

export default FrontPage