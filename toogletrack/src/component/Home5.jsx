import { useState } from "react"
import "../style/Home5.css"



export default function Home5() {
    const [fl,setfl]=useState("Freelancers")

    const mn=[
        "Freelancers",
        "Agencies & professional services",
        "Enterprise teams"
    ]
    const data=[
        {
            hd:"Need time tracking that helps you stay productive and bill clients accurately?",
            sub:"Toggl Track is indispensable for keeping track of my hours by project so I can create invoices. It makes it easy to calculate the time I need for certain types of work. All in all, it is the best way to accurately prepare your financial claims.",
            aut:"Ema N. (Editor)",
            img:"https://public-assets.toggl.com/b/static/bed57e40b10610cc4477f5d05bcb524d/55c71/type-freelancer.avif",
            fl:"Freelancers"
        },
        {
            hd:"Need a simpler way to scope projects and track billable hours?",
            sub:"Excellent time tracking and overview of project management. Toggl Track helps us drive insights about how to better allocate time and energy to make the business grow.",
            aut:"Lisandro R. (Marketing)",
            img:"https://public-assets.toggl.com/b/static/6209decc0686b8eb13ff787236a767ff/55c71/type-agency.avif",
            fl:"Agencies & professional services"
        },
        {
            hd:"Need fuss-free time tracking that gets you accurate data for easy analysis?",
            sub:"This is a very useful tool for our organization as it allows us to keep a detailed record of the time invested by each of our collaborators. We work with several contractors and it allows us to measure efficiencies and delays for every single employee.",
            aut:"Mariana G. (Finance Director)",
            img:"https://public-assets.toggl.com/b/static/6b3ce22125297ade573edc3ac28f4786/55c71/type-enterprise.avif",
            fl:"Enterprise teams"
        }
    ]


    return(
        <div className="home5">
            <div className="home5_con">
                <p>The right feature set for every team</p>
                <div className="opt2 opt3">
                    {
                        mn.map((el,i)=>(
                            <p onClick={()=>setfl(el)} style={fl==el?{backgroundColor:"rgb(65,42,76)",color:"rgb(255,235,189)"}:{backgroundColor:"rgb(255,235,189)",color:"rgb(65,42,76)"}}>{el}</p>
                        ))
                    }
                </div>
                <div>
                    {
                        data.map((el,i)=>(
                            <div key={i} className="home5_box" style={fl==el.fl?{display:"flex"}:{display:"none"}}>
                                <div>
                                    <p>{el.hd}</p>
                                    <p>Learn how Toggl Track can help you</p>
                                    <img src={el.img} alt="" />
                                    <p>{el.sub}</p>
                                    <p>{el.aut}</p>
                                </div>
                                <img src={el.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}