import { useDispatch } from 'react-redux';
import { OUR_SPECIALTY } from '../../data/menu';
import { ACTIONS } from '../../store/reducer';
import FoodCard from '../food-card/FoodCard';
import PlateCard from '../plate-card/PlateCard';
import './FoodSection.scss'



const FoodSection = ({ }) => {
    const dispatch = useDispatch()

    const onClickAddOrder = (foodOrder, addToCart) => {
        addToCart ? dispatch({ type: ACTIONS.ADD_ORDER, payload: foodOrder }) : dispatch({ type: ACTIONS.REMOVE_ORDER, payload: { id: foodOrder.id } })
    }


    return <div className='FoodSection'>
        <div className='FoodCard-container'>
            {/* {OUR_SPECIALTY.map(item => <FoodCard key={'foodcard.' + item.id} {...item} />)} */}

            {OUR_SPECIALTY.map(item => <PlateCard key={'platecard.' + item.id} {...item} onClickHandler={onClickAddOrder} />)}
        </div>
    </div>
}

export default FoodSection;