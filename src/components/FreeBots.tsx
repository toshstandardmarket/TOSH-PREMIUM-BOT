function FreeBots(){


const bots = [

["TOSH Alpha Bot","EMA + Momentum","High payout"],
["TOSH Quantum Bot","Bollinger + ATR","High payout"],
["TOSH Velocity Bot","Fast tick momentum","Risk control"],
["TOSH Phantom Bot","Reversal patterns","Risk control"],
["TOSH Nova Bot","Support resistance","Risk control"],
["TOSH Titan Bot","Trend confirmation","Risk control"],
["TOSH Matrix Bot","Multi indicator","High payout"],
["TOSH Elite Bot","Adaptive strategy","High payout"]

];



return (

<div className="free-bots">


<h2>
⚡ Free Bot Collection
</h2>



<div className="bot-info-grid">


{bots.map((bot,index)=>(


<div
className="bot-card"
key={index}
>


<h3>
{bot[0]}
</h3>


<p>
Strategy:
{bot[1]}
</p>


<span>
{bot[2]}
</span>


</div>


))}


</div>



</div>

);


}


export default FreeBots;
