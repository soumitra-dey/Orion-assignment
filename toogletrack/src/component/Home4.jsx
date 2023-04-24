import "../style/Home4.css"
import Button from "../Assets/common/Button"
import {TiTick} from "react-icons/ti"


export default function Home4(){

    const data=[
        {
            hd:"20% increase in profitability",
            det:"at Sweat+Co PR agency, with accurate billable hours tracking.",
            img:"https://public-assets.toggl.com/b/static/688b536c11e2e2d366240687a2e83c1a/80f52/cs-team-sweatandco.avif"
        },
        {
            hd:"100% time tracking adoption",
            det:"at software consultancy Newlogic for accurate reporting.",
            img:"https://public-assets.toggl.com/b/static/23cc7d4553237da72a6cd3f8f3aef5f5/80f52/cs-newlogic.avif"
        },
        {
            hd:"40+ hours saved per month",
            det:"at Perception Engineering with simple, one-click time tracking and invoicing.",
            img:"https://public-assets.toggl.com/b/static/e7c4d2fd668b009ced3ae88d710c4adb/80f52/case-study-perception-engineering.avif"
        }
    ]

    const data2=[
        {
            a:"Cross-platform apps",
            b:" for all time tracking preferences."
        },
        {
            a:"GDPR-compliant.",
            b:"Your security is our priority."
        },
        {
            a:"Top-rated support",
            b:" with a response time of 3 hours!"
        },
        {
            a:"99% uptime",
            b:" for your peace of mind."
        }
    ]

    return(
        <div className="home4">
            <div className="home4_con">
                <p>Companies that use Toggl Track see results in profit and productivity</p>
                <div className="home4_box">
                    {
                        data.map((el,i)=>(
                            <div key={i} className="home4_cn">
                                <div>
                                    <p>{el.hd}</p>
                                    <p>{el.det}</p>
                                    <a href="">Read case study</a>
                                </div>
                                <img src={el.img} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className="home4_last">
                    <div className="home4_last_left">
                        <div>
                            <p>Onboarding a large team? We’d love to show you around.</p>
                            <p>Teams of 10+ are eligible for a custom demo to see how Toggl Track works at scale.</p>
                        </div>
                        <Button con={"Book a demo"}/>
                    </div>
                    <div className="home4_last_right">
                        {
                            data2.map((el,i)=>(
                                <div key={i}>
                                    <TiTick/>
                                    <p>{el.a}<span>{el.b}</span></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}