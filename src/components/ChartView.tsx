import { useEffect, useState } from "react";
import { subscribeTicks } from "../market/ticks";


function ChartView(){


const [ticks,setTicks] = useState<any[]>([]);



useEffect(()=>{


subscribeTicks(
"R_100",
(tick)=>{


setTicks(old=>[

{
spot:tick.quote,
time:new Date()
.toLocaleTimeString()

},

...old

].slice(0,15));


});


},[]);




return (

<div className="chart-box">


<h2>
📈 Live Rise / Fall Chart
</h2>



<div className="ticks">


{ticks.map((t,index)=>{


const rise =
index === 0 ||
t.spot >= ticks[index+1]?.spot;



return (

<div key={index}>


<span>

{rise ? "🟩 RISE" : "🟥 FALL"}

</span>


&nbsp;

Spot:
{t.spot}



</div>


);


})}



</div>


</div>

);


}


export default ChartView;
