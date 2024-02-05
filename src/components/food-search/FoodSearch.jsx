import './FoodSearch.scss'
import search from '../../assets/icon-heart.svg'
const FoodSearch = ({ setSearchedFood }) => {
    return <form className="FoodSearch">
        <input type="text" id="search-bar" placeholder="جاي عبالي.." dir='rtl' onChange={(e) => setSearchedFood(e.target.value)} />
    </form>

}
export default FoodSearch;