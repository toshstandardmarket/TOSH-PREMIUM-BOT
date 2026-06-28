import BotWorkspace from "./BotWorkspace";
import { useState } from "react";


type BotProps = {
  name:string;
  strategy:string;
  payout:string;
  icon:string;
};


function BotCard({
 name,
 strategy,
 payout,
 icon
}:BotProps){


const [open,setOpen] = useState(false);



if(open){

return (

<BotWorkspace />

);

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
Market Condition
</span>


<div className="bar">

<div className="fill">

</div>

</div>


<small>
{payout}
</small>


</div>



<button
onClick={()=>setOpen(true)}
>

LOAD BOT

</button>



</div>

);

}


export default BotCard;
