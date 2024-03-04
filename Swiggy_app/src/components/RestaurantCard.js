import { IMG } from "../utils/constants"

const RestaurantCard = (props) => {
    
    const {cloudinaryImageId,name,avgRating,cuisines} = props.data.info
    return (
        <div className="res_card">
            <img className="img_item" src={IMG+cloudinaryImageId} />
            <h3 >{ name}</h3>
            <h4>{ avgRating}</h4>
            <h4>{ cuisines.join(" , ")}</h4>
            <h4>{props.data.info.sla.deliveryTime}{" " }minutes</h4>
        </div>
    )
}
export default RestaurantCard