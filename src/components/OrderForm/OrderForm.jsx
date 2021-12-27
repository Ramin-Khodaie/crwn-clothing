import CustomeInput from "../CustomInput/CustomInput";

const OrderForm =()=>{
    return (
        <div className="OrderForm">
            <form>
                {/* <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Address"/> */}
                <CustomeInput/>
            </form>
        </div>
    )
}

export default OrderForm;