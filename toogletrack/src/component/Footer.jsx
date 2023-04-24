import "../style/Footer.css"



export default function Footer() {

    const data=[
        {
            hd:"TOGGL GLOBAL",
            dt:[
                "Blog",
                "Our Mission",
                "Working at Toggl",
                "Legal Terms"
            ]
        },
        {
            hd:"PRODUCT",
            dt:[
                "Features",
                "Pricing",
                "Integrations",
                "Case Studies",
                "API"
            ]
        },
        {
            hd:"USE CASES",
            dt:[
                "Billing and Invoicing",
                "Employee Time Tracking",
                "Project Budgeting",
                "Reporting",
                "Payroll",
                "Work Hours Tracker",
                "Timesheet App"
            ]
        },
        {
            hd:"DOWNLOAD",
            dt:[
                "Mobile Apps",
                "Desktop Apps",
                "Browser Extensions"
            ]
        },
        {
            hd:"HELP",
            dt:[
                "Support & Knowledge Base",
                "Request A Demo",
                "Contact Us"
            ]
        },
        {
            hd:"RESOURCES",
            dt:[
                "Time Management Hub",
                "Work From Home Hub",
                "Business Resources",
                "Productivity Resources",
                "Timesheet Templates",
                "Media Kit"
            ]
        }
    ]

    return (
        <div className="footer">
            <div className="footer_main">
                <img src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png" alt="" />
                <div className="footer_items">
                    {
                        data.map((el,i)=>(
                            <div key={i}>
                                <p>{el.hd}</p>
                                <div>
                                    {
                                        el.dt.map((ele,j)=>(
                                            <p key={j}>{ele}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <img src="https://i.ibb.co/pJHY4wP/Screenshot-from-2023-04-24-13-23-57.png" alt="" />
                </div>
            </div>
        </div>
    )
}