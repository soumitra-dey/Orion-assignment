import {career} from "../../Assets/datas"
import Items from "./Items"
import "../../style/Product.css"
import {BsArrowRight} from "react-icons/bs"



export default function Careers(){



    return (
        <div className="product">
            <div>
                <p className="hng">WORK ON A PRODUCT THAT MATTERS TO MILLIONS</p>
                <div>
                    <Items data={career} count={3}/>
                </div>
            </div>
        </div>
    )
}