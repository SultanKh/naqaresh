

import { ACTIONS } from '../../store/reducer';
import './FoodCartItem.scss'
const FoodCartItem = ({ id, Category, ArabicName, HerbrewName, Price, Description, dispatch }) => {
    return <div className="FoodCartItem">

        <button onClick={() => { dispatch({ type: ACTIONS.REMOVE_ORDER, payload: { id: id } }) }}>
            <i className='delete-item'></i>
        </button>

        <div className="image">
            <img src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                alt="food to buy"
                width='130' />
        </div>

        <div className="description">
            <span>{ArabicName}</span>
            <span>{HerbrewName}</span>
            <span>{Category}</span>
        </div>

        <div className="quantity">
            <button className="plus-btn" type="button" name="button">
                <img src="plus.svg" alt="" />
            </button>
            <input type="text" name="name" value="1" onChange={() => { }} />
            <button className="minus-btn" type="button" name="button">
                <img src="minus.svg" alt="" />
            </button>
        </div>

        <div className="total-price">{Price} NIS</div>
    </div>

}


export default FoodCartItem;