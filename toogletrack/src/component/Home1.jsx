import React, { useEffect, useRef, useState} from 'react'
import Button from "../Assets/common/Button"
import "../style/Home1.css"
import {AiOutlineEye, AiOutlineEyeInvisible,AiOutlineGoogle,AiFillApple} from "react-icons/ai"
import {BsFillPlayCircleFill} from "react-icons/bs"


export default function () {
    const [fl,setfl]=useState(false)
    const ref = useRef(null)
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [hou, setHou] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            start()
        },3000)
    },[])

    useEffect(() => {

        if (min >= 60) {
            setHou(h => h + 1)
            setMin(0)
            setSec(0)
        }

        if (sec >= 60) {
            setMin(m => m + 1)
            setSec(0)
        }
        

    }, [sec, min]);

    const start = () => {
        clearInterval(ref.current)
        ref.current = setInterval(() => {
            setSec(s => s + 1)
        }, 1000)
    }

    return(
        <div className="main1">
            <div className="main_content">
                <p>Simple time tracking to save you <span>time</span> and <span>money</span>.</p>
                <div>
                    <div className="main_left">
                        <p>Bill accurately, measure profitability, manage workloads — and spend less time on it all.</p>
                        <input type="text" name="" id="" placeholder="Email" className="inp_email"/>
                        <div className="inp_pass">
                            <input type={fl==true?"text":"password"} name="" id="" placeholder="Password" className="inp_email" />
                            {
                                fl==false?
                                <AiOutlineEye onClick={()=>setfl(true)}/>
                                :<AiOutlineEyeInvisible onClick={()=>setfl(false)}/>
                            }
                        </div>
                        <div className="sec2">
                            <div>
                                <Button con={"Sign up with email"}/>
                            </div>
                            <div>
                                <p>Or dign up with:</p>
                                <AiOutlineGoogle className="lg"/>
                                <AiFillApple className="lg"/>
                            </div>
                        </div>
                        <p className="sec3">By signing up, you agree to our <span>terms of service</span>, <span>privacy policy</span> and to receiving marketing communication from Toggl Track. You can opt out anytime.</p>
                    </div>
                    <div className="right">
                        <div className="timer">
                            <p>Stand-up meeting</p>
                            <p>
                                {hou<10?`0${hou}`:hou}:
                                {min<10?`0${min}`:min}:
                                {sec<10?`0${sec}`:sec}
                            </p>
                            <BsFillPlayCircleFill/>
                        </div>
                        <p className="quote">“I love the ease of just clocking in and out with <span>just one click!</span>”</p>
                        <p>– Quelani P.</p>
                    </div>
                </div>
                <div className="last">
                    <p>TRUSTED BY OVER 5 MILLION USERS ACROSS 120 COUNTRIES</p>
                    <img src="https://public-assets.toggl.com/b/static/5dd908f54f24fb325e24d90c5856d815/5029e/brands-mixed-desktop-light.avif" alt="" />
                    <img src="https://public-assets.toggl.com/b/static/f6d9af91a4ee6ce7f2939828f016b078/2e839/brands-mixed-mobile-light.avif" alt="" />
                </div>
            </div>
        </div>
    )
}