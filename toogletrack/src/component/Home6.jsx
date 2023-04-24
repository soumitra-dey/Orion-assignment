import "../style/Home6.css"
import {AiOutlineGoogle, AiFillApple,AiOutlineMail} from "react-icons/ai"
import Button from "../Assets/common/Button"

export default function Home6() {




    return (
        <div className="home6">
            <div className="home6_content">
                <p>Switch to the time tracking tool 70,000+ teams across the world swear by</p>
                <div>
                    <div className="home6_left">
                        <p>Sign up for free</p>
                        <p>All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required. Upgrade at the end of the trial or continue using Track for free.</p>
                        <div>
                            <button className="home6_btn">
                                <AiOutlineGoogle/>
                                Sign up with Google
                            </button>
                            <button className="home6_btn">
                                <AiFillApple/>
                                Sign up with Apple
                            </button>
                        </div>
                        <button className="home6_btn">
                            <AiOutlineMail/>
                            or sign up via email
                        </button>
                        <p>By signing up, you agree to our <span>terms of service</span>, <span>privacy policy</span> and to receiving marketing communication from Toggl Track. You can opt out anytime.</p>
                    </div>
                    <div className="home6_right">
                        <p>Prefer a product demo instead?</p>
                        <p>Teams of 10+ are eligible for a personalized demo to see how Toggl Track can meet your time tracking goals</p>
                        <Button con={"Book a demo"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}