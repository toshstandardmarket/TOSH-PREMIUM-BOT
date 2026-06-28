import { useState } from "react";


function BotWorkspace() {


const [running,setRunning] = useState(false);

const [profit,setProfit] = useState(0);

const [trades,setTrades] = useState(0);

const [won,setWon] = useState(0);

const [lost,setLost] = useState(0);



function startBot(){

setRunning(true);

setTrades(old=>old+1);

setProfit(old=>old+5);

setWon(old=>old+1);

}



function stopBot(){

setRunning(false);

}



return (

<div className="workspace">


<h2>
TOSH BOT WORKSPACE
</h2>



<div className="config">


<input placeholder="Stake Amount ($)" />

<input placeholder="Target Profit ($)" />

<input placeholder="Stop Loss ($)" />


</div>



<div className="controls">


<button
className="run"
onClick={startBot}
>

{running ? "BOT RUNNING" : "RUN BOT"}

</button>



<button
className="stop"
onClick={stopBot}
>

STOP

</button>



</div>




<div className="stats">


<div>
Total Trades
<br/>
{trades}
</div>



<div>
Won
<br/>
{won}
</div>



<div>
Lost
<br/>
{lost}
</div>



<div>
Profit
<br/>

<span className="profit">
${profit}
</span>

</div>



</div>



</div>

);


}


export default BotWorkspace;
