import BotWorkspace from "./BotWorkspace";
import { useState, useEffect } from "react";


type BotProps = {
  name:string;
  strategy:string;
  payout:string;
  icon:string;
  strength:number;
};


function BotCard({
 name,
 strategy,
 payout,
 icon,
 strength
}:BotProps){


const [open,setOpen] = useState(false);

const [market,setMarket] = useState(strength);



useEffect(()=>{

const timer = setInterval(()=>{

setMarket(old=>{

let change = Math.floor(Math.random()*5)-2;

let next = old + change;

if(next < 20) next = 20;
if(next > 95) next = 95;

return next;

});


},2500);


return ()=>clearInterval(timer);


},[]);



if(open){

return <BotWorkspace />;

}



return (

<div className="bot-card">


<div className="bot-icon">
{icon}
</div>


<h3>
{name}
</h3>


<p>
{strategy}
</p>



<div className="market">


<span>
Market Condition {market}%
</span>


<div className="bar">

<div
className="fill"
style={{
width:`${market}%`,
background:
market >= 75
? "#00ff88"
: "#ff3344"
}}
>

</div>


</div>



<small>
{payout}
</small>


</div>



<button onClick={()=>setOpen(true)}>
LOAD BOT
</button>



</div>

);

}


export default BotCard;
