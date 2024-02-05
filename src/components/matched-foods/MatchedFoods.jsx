import { useDispatch } from "react-redux";
import PlateCard from "../plate-card/PlateCard";
import './MatchedFoods.scss'
import { ACTIONS } from "../../store/reducer";

const MatchedFood = ({ matchedFood }) => {
    const dispatch = useDispatch()

    const onClickAddOrder = (foodOrder, addToCart) => {
        addToCart ? dispatch({ type: ACTIONS.ADD_ORDER, payload: foodOrder }) : dispatch({ type: ACTIONS.REMOVE_ORDER, payload: { id: foodOrder.id } })
    }

    return <>
        {matchedFood.length === 0 ? <div className='no-matched-container'>...مفش عنا هيك اشي</div>
            : <div className='matched-foods'>
                {matchedFood.map(item => <div key={'matchedplate.' + item.id} className='matched-food-item show'><PlateCard  {...item} onClickHandler={onClickAddOrder} /></div>)}
            </div>}</>
}


export default MatchedFood;