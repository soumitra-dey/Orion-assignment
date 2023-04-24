import {IoMdArrowDropdown} from "react-icons/io"
import "../style/Navbar.css"

export default function Topbar(){

    return (
        <div className="top_content">
            <p>Back to Toggle Global</p>
            <p>Products<IoMdArrowDropdown/></p>
            <p>Blog</p>
            <p>Our mission</p>
            <p>Working at Toogl</p>
        </div>
    )
}