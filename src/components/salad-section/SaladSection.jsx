import { useDispatch } from "react-redux";
import { BBQ_SALADS, SALADS } from "../../data/menu";
import SaladCard from "../salad-card/SaladCard";
import './SaladSection.scss'
const SaladSection = () => {
    const dispatch = useDispatch();

    return <>
        <div className='title-section' dir='rtl'>
            <h1>سلطاتنا</h1>
        </div>
        <div className='salad-cards-container'>
            {SALADS.map(item => <SaladCard key={'saladcard' + item.id} {...item} type='general' dispatch={dispatch} />)}
            <div className='general-salads'>
            </div>
        </div>

        <div className='bbq-salads-container'>
            {BBQ_SALADS.map(item => <SaladCard key={'saladcard' + item.id} {...item} type='bbq' dispatch={dispatch} />)}
        </div>
    </>
}

export default SaladSection;