import {productdata,productdata2} from "../../Assets/datas"
import Items from "./Items"
import "../../style/Product.css"
import {BsArrowRight} from "react-icons/bs"



export default function Products(){



    return (
        <div className="product">
            <div>
                <p className="hng">FOR EVERY NEED</p>
                <div>
                    <Items data={productdata} count={2}/>
                </div>
                <div className="link">
                    <p>Toggl Track stands against employee surveillance. Read our statement here.</p>
                    <BsArrowRight/>
                </div>
            </div>
            <div className="line"></div>
            <div>
                <p className="hng">TRACK ANYWHERE YOU LIKE</p>
                <Items data={productdata2} count={1}/>
            </div>
        </div>
    )
}