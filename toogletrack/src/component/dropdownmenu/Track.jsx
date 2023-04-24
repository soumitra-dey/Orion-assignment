import {track} from "../../Assets/datas"
import Items from "./Items"
import "../../style/Product.css"
import {BsArrowRight} from "react-icons/bs"



export default function Track(){



    return (
        <div className="product">
            <div>
                <p className="hng">TIME TRACKING FOR EVERY TEAM SIZE</p>
                <div>
                    <Items data={track} count={3}/>
                </div>
                <div className="link">
                    <p>Track has helped teams across multiple industries increase profitability and productivity, shavings hours off admin. Explore case studies</p>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
    )
}