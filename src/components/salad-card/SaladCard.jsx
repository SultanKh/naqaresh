import './SaladCard.scss'
import img from '../../assets/plate1.jpg'
import { useState } from 'react'
import { ACTIONS } from '../../store/reducer'

const SaladCard = ({ id, Category, ArabicName, HerbrewName, Price, Description, img, type, dispatch }) => {


    const [addToCart, setAddToCart] = useState(false)

    const onClickAddToCart = () => {

        setAddToCart(addToCart => {
            const toggled = !addToCart
            toggled ? dispatch({ type: ACTIONS.ADD_ORDER, payload: { id, Category, ArabicName, HerbrewName, Price, Description, img, type } })
                : dispatch({ type: ACTIONS.REMOVE_ORDER, payload: { id: id } })
            return toggled
        })

    }
    return <div className={'SaladCard card ' + type} >

        <div className="content">
            <h2 className="title">{ArabicName}</h2>
            {Description && Description != 'none' && <p className="copy">{Description}</p>}
            <button className={"btn" + (addToCart ? ' clicked' : '')} onClick={() => onClickAddToCart()}>
                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="black"></path> </svg>
            </button>
        </div>
    </div>

}

export default SaladCard;