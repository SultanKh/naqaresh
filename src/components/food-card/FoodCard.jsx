import './FoodCard.scss'

const FoodCard = ({Category, ArabicName, HerbrewName, Price, Description}) => {
    return <div className='FoodCard card'>

        <div className='card-body'>
        </div>
        <div className='card-footer'>
            <div className='title'>
                <h2>{ArabicName}</h2>
            </div>

        </div>
    </div>
}
export default FoodCard;