
import './FoodCartButton.scss'
import foodBag from '../../assets/icon-food-bag.png'
import { useState } from 'react'
const FoodCartButton = ({ setOpenCart, openCart }) => {

    const onClickHandler = () => {

        setOpenCart(true)
    }
    return <>
        <div className="FoodCartButton floating-container">
            <button className={'floating-button' + (openCart ? ' down-transition' : '')} onClick={() => onClickHandler()}>
                <img src={foodBag} alt='food bag' />
            </button>
        </div >
    </>
}

export default FoodCartButton
