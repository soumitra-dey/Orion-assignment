import { useState } from "react"
import "../style/Home2.css"
import {TiTick} from "react-icons/ti"
import Button from "../Assets/common/Button"


export default function Home2(){
    const [fl,setfl]=useState("Employee time tracking")
    const data=[
        "Employee time tracking",
        "Billing & invoicing",
        "Project budgeting",
        "Reporting",
        "Payroll"
    ]
    const maindata=[
        {
            hd:"Make timesheets history.",
            po:["Get the data you need without disrupting your team's workflow. Track's one-click time tracking syncs across multiple platforms.", "Get employee buy-in with a tool designed to empower teams with knowledge, not micromanage them."],
            Im:"https://public-assets.toggl.com/b/static/2f9323cffe44aa5a7b876e19dbd12a09/fe204/employee-time-tracking-short.avif",
            tr:"Employee time tracking"
        },
        {
            hd:"Get paid for every billable hour..",
            po:["Track billable hours for projects and clients as you go. Invoice clients for the exact time you put in.", "Keep clients happy with transparent records of how billable hours were spent."],
            Im:"https://public-assets.toggl.com/b/static/7469aa68c758bdc5cb2b985614c195f2/2cb01/billing-invoicing-short.avif",
            tr:"Billing & invoicing"
        },
        {
            hd:"Keep projects profitable. Keep employees happy.",
            po:["Create realistic project scopes based on time tracking data. Manage team workloads to prevent burnout.","Don’t turn projects in late, and don’t let projects turn unprofitable. Track budgets, labor costs, project hours and estimates in real time."],
            Im:"https://public-assets.toggl.com/b/static/bedecce377d11027f44d6c9f176e55c4/2cb01/project-budgeting-short.avif",
            tr:"Project budgeting"
        },
        {
            hd:"Get actionable insights into projects and keep stakeholders informed.",
            po:["Fine-tune your pricing, prioritize, and grow your business with profitability projections, earning-per-client data, ROI reports and other key insights.","Communicate progress to clients and stakeholders and build trust with beautiful, ready-to-share reports."],
            Im:"https://public-assets.toggl.com/b/static/0ddf4978ccec4c21a3b295689a0cdc83/2cb01/reporting-short.avif",
            tr:"Reporting"
        },
        {
            hd:"Pay employees and contractors on time.",
            po:["Easy, fast, and fuss-free payroll based on billable hours tracked","Assign billable rates to view reliable payroll data linked to every employee and contractor."],
            Im:"https://public-assets.toggl.com/b/static/1e870c84fc362fc3a024578da5bae259/2cb01/payroll-short.avif",
            tr:"Payroll"
        }
    ]

    return(
        <div className="home2">
            <div className="main">
                <p>Time tracking for all your productivity and profitability needs</p>
                <div>
                    <div className="opt2">
                        {
                            data.map((el,i)=>(
                                <p onClick={()=>setfl(el)} style={fl==el?{backgroundColor:"rgb(65,42,76)",color:"rgb(255,235,189)"}:{backgroundColor:"rgb(255,235,189)",color:"rgb(65,42,76)"}}>{el}</p>
                            ))
                        }
                    </div>
                    <div>
                        {
                            maindata.map((el,i)=>(
                                <div className="home2_box" key={i} style={fl==el.tr?{display:"flex"}:{display:"none"}}>
                                    <div className="home2_left">
                                        <p>{el.hd}</p>
                                        <div>
                                            <div>
                                                <TiTick/>
                                                <p>{el.po[0]}</p>
                                            </div>
                                            <div>
                                                <TiTick/>
                                                <p>{el.po[1]}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Button con={"Learn more"}/>
                                            <p>Or sign up for free</p>
                                        </div>
                                    </div>
                                    <img src={el.Im} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}