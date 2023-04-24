import { useState } from "react"
import {IoMdArrowDropdown} from "react-icons/io"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineCaretRight} from "react-icons/ai"
import {RxCross2} from "react-icons/rx"
import "../style/Navbar.css"
import Products from "./dropdownmenu/Products"
import Track from "./dropdownmenu/Track"
import Careers from "./dropdownmenu/Careers"
import {BsArrowLeft} from "react-icons/bs"

export default function Navbar(){
    const [dis_menu,setdis_menu] = useState(false)

    function addmenu(mn){
        if (dis_menu==mn){
            setdis_menu(false)
        } else {
            setdis_menu(mn)
        }
    }

    return (
        <div className="nav">
            <div className="nav_content" style={
                dis_menu=="pro"?{backgroundColor:"rgb(252,229,216)",color:"black"}
                :dis_menu=="tra"?{backgroundColor:"rgb(252,229,216)",color:"black"}
                :dis_menu=="car"?{backgroundColor:"rgb(252,229,216)",color:"black"}
                :null
            }>
                <div className="nav_left">
                    <img src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png" alt="" />
                    <div>
                        <p onClick={()=>addmenu("pro")}>Product<IoMdArrowDropdown/></p>
                        <p>Pricing</p>
                        <p onClick={()=>addmenu("tra")}>Why Track?<IoMdArrowDropdown/></p>
                        <p onClick={()=>addmenu("car")}>Careers<IoMdArrowDropdown/></p>
                    </div>
                </div>
                <div className="nav_right">
                    <p>Book a demo</p>
                    <p></p>
                    <p>Log in</p>
                    <button className="loginbtn" style={
                        dis_menu=="pro"?{backgroundColor:"rgb(229,124,216)",color:"black"}
                        :dis_menu=="tra"?{backgroundColor:"rgb(229,124,216)",color:"black"}
                        :dis_menu=="car"?{backgroundColor:"rgb(229,124,216)",color:"black"}
                        :null
                    }>Try for free</button>
                </div>
                <div className="menu">
                    <GiHamburgerMenu onClick={()=>setdis_menu(true)} style={dis_menu==true?{display:"none"}:{display:"block"}}/>
                    <RxCross2 onClick={()=>setdis_menu(false)} style={dis_menu==true?{display:"block"}:{display:"none"}}/>
                </div>
                <div className="menu_content" style={dis_menu==true?{display:"block"}:{display:"none"}}>
                    <div>
                        <p onClick={()=>addmenu("pro")}>Product<AiOutlineCaretRight/></p>
                        <p>Pricing</p>
                        <p onClick={()=>addmenu("tra")}>Why Track?<AiOutlineCaretRight/></p>
                        <p onClick={()=>addmenu("car")}>Careers<AiOutlineCaretRight/></p>
                        <p>Book a demo</p>
                    </div>
                    <div>
                        <button className="loginbtn">Try for free</button>
                        <p>Log in</p>
                    </div>
                </div>
                <div className="dropdown" style={dis_menu==true?{display:"none"}:dis_menu==false?{display:"none"}:{display:"block"}}>
                    <div className="backbtn" onClick={()=>addmenu(true)}>
                        <BsArrowLeft/>
                        <p>Back</p>
                    </div>
                    {
                        dis_menu=="pro"?
                        <Products/>
                        :dis_menu=="tra"?
                        <Track/>
                        :<Careers/>
                    }
                </div>
            </div>
        </div>
    )
}