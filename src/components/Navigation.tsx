import { useState } from "react";


function Navigation() {


const [active,setActive] =
useState("Dashboard");



const tabs = [

"📊 Dashboard",
"🤖 Bot Builder",
"📈 Chart",
"📊 Analysis",
"⚡ Free Bot"

];



return (

<nav className="navigation">


{tabs.map(tab=>(


<button

key={tab}

className={
active===tab ? "active" : ""
}


onClick={()=>setActive(tab)}

>

{tab}

</button>



))}


</nav>

);


}


export default Navigation;
