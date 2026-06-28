import { useState } from "react";


function BotWorkspace() {

const [running,setRunning] = useState(false);


return (

<div className="workspace">


<h2>
Bot Trading Workspace
</h2>


<div className="config">


<input
placeholder="Stake Amount"
/>


<input
placeholder="Target Profit"
/>


<input
placeholder="Stop Loss"
/>


</div>



<div className="controls">


<button
className="run"
onClick={()=>setRunning(true)}
>

{running ? "BOT RUNNING" : "RUN BOT"}

</button>



<button
className="stop"
onClick={()=>setRunning(false)}
>

STOP

</button>


</div>



<div className="stats">


<div>
Total Trades
<br/>
0
</div>


<div>
Won
<br/>
0
</div>


<div>
Lost
<br/>
0
</div>


<div>
Profit
<br/>
$0.00
</div>


</div>


</div>

);


}


export default BotWorkspace;
