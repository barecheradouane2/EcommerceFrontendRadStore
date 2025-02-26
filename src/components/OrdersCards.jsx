
import OrderCardInfo from "./OrderCardInfo"
function OrdersCards() {
    return (
        <div className="mt-5 flex flex-wrap justify-center gap-2">

            <OrderCardInfo title="Total Products" Amount="100" quantity="35" state="plus"/>
            <OrderCardInfo title="Revenue" Amount="13.456" quantity="35"  state="plus"/>
            <OrderCardInfo title="Total Orders" Amount="44" quantity="35" state="mins" />
            
            
        </div>
    )
}

export default OrdersCards
