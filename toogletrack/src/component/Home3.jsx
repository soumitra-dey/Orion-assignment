import Button from "../Assets/common/Button"
import "../style/Home3.css"




export default function Home3(){

    const data=[
        {
            hd:"Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.",
            img:"https://public-assets.toggl.com/b/static/6286ab8ed1c02d9625e9ba57ad687f8e/27604/feature-increasebillables.avif",
            img2:""
        },
        {
            hd:"Speed up team adoption with an anti-surveillance platform that gets a yes from every employee.",
            img:"https://public-assets.toggl.com/b/static/a2fbe9cda087f0b4ddf3b1f8f768e34f/73142/feature-trustemployee.avif",
            img2:"https://i.ibb.co/pvKFLj9/Screenshot-from-2023-04-24-09-26-05.png"
        },
        {
            hd:"No training necessary. Get started right away with intuitive and welcoming features.",
            img:"https://public-assets.toggl.com/b/static/ee6383ab7e873edf369c3c6b373a3164/77bd7/feature-intuitive.avif",
            img2:"https://i.ibb.co/5TcB3B5/Screenshot-from-2023-04-24-09-26-24.png"
        },
        {
            hd:"Make time tracking and reporting a breeze with a beautifully-designed app experience.",
            img:"https://public-assets.toggl.com/b/static/ab5bff19a9536d90c2c584c3e402ff1c/47a0a/feature-onetrack.avif",
            img2:"https://i.ibb.co/QYzrnnV/Screenshot-from-2023-04-24-09-26-38.png"
        }
    ]


    return (
        <div className="home3">
            <div className="home3_cont">
                <p>Why do teams love Toggl Track?</p>
                <div>
                    {
                        data.map((el,i)=>(
                            <div key={i} className="home3_box" style={
                                i==0?{backgroundColor:"rgb(247,216,243)"}
                                :i==0?{backgroundColor:"rgb(252,229,216)"}
                                :i==0?{backgroundColor:"rgb(252,229,216)"}
                                :{backgroundColor:"rgb(255,242,211)"}
                            }>
                                <p>{el.hd}</p>
                                <img src={el.img} alt="" />
                                <img src={el.img2} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className="home3_banner">
                    <div>
                        <p>The only time tracking tool with over 100+ integrations</p>
                        <p>From Asana to Zapier, Jira, Salesforce and much more — integrate Toggl Track with tools your team already uses.</p>
                        <p>Explore integrations</p>
                    </div>
                    <img src="https://public-assets.toggl.com/b/static/ebd5e3f62e8f0ff1038ea4b37811be34/eb6c2/feature-integrations.avif" alt="" />
                </div>
                <div className="home3_footer">
                    <p>Join 5 million users tracking their time to get results</p>
                    <p>All plans come with a free, 30-day trial of Toggl Track Premium. Upgrade at the end of the trial or continue using Track for free.</p>
                    <div>
                        <Button con={"Start tracking for free"}/>
                        <p>Or explore pricing plans</p>
                    </div>
                </div>
            </div>
        </div>
    )
}