import "../../style/Items.css"



export default function Items({data,count}) {
    const viewportWidth = window.innerWidth;


    return (
        <div className="main" style={viewportWidth>="800"?{gridTemplateColumns:`repeat(${count},1fr)`}:{gridTemplateColumns:"repeat(1,1fr)"}}>
            {
                data.map((el,i)=>(
                    <div key={i} className="items">
                        <img src={el.image} alt=""/>
                        <div>
                            <p>{el.heading}</p>
                            <p>{el.details}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}